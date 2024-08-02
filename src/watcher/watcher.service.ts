import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Web3Service } from 'nest-web3';
import priceFeedJson from '../abi/FastPriceFeed';
import { tokens } from '../configs/tokens';
import { fetchPriceBits } from 'src/prices';

const SYNC_INTERVAL = 10000;

@Injectable()
export class WatcherService {
    private readonly logger = new Logger(WatcherService.name);
    private client = this.web3Service.getClient('hmy');
    private gasLimit = 9721900;
    private accountAddress: string;

    private lastUpdateTime = '';
    private priceLastUpdateTimestamp = 0;
    private lastPrices = {};
    private lastPriceBits = '';
    private lastSuccessTx = '';
    private lastErrorTx = '';
    private lastError = '';

    constructor(
        private configService: ConfigService,
        private readonly web3Service: Web3Service
    ) {
        this.client = this.web3Service.getClient('hmy');

        const account = this.client.eth.accounts.privateKeyToAccount('0x' + this.configService.get('keys.keeper'));

        this.client.eth.accounts.wallet.add(account);
        this.client.eth.defaultAccount = account.address;

        this.accountAddress = account.address;

        if (this.configService.get('services.watcher')) {
            this.checkPrices();
        }
    }

    checkPricesAndDisable = async () => {
        const priceFeedContract = new this.client.eth.Contract(
            priceFeedJson.abi as any,
            this.configService.get('contracts.fastPriceFeed')
        );

        const { prices, priceBits, normalizedPrices } = await fetchPriceBits(
            tokens.map(t => ({
                symbol: t.symbol,
                precision: t.fastPricePrecision
            }))
        );

        this.lastPrices = prices;
        this.lastPriceBits = priceBits;

        let hasWrongPrice = false;

        for (let i = 0; i < normalizedPrices.length; i++) {
            const watcherPrice = normalizedPrices[i];
            const token = tokens[i];

            const keeperPrice = await priceFeedContract.methods.getPrice(
                token.address,
                1,
                true
            ).call();

            hasWrongPrice = Math.abs(watcherPrice - keeperPrice) > token.fastPricePrecision;

            this.logger.log(token.symbol, watcherPrice, keeperPrice, hasWrongPrice);
        }

        if (hasWrongPrice) {
            const tx = await priceFeedContract.methods
                .disableFastPrice().send({
                    from: this.accountAddress,
                    gas: this.gasLimit,
                    gasPrice: 101000000000,
                });

            this.logger.log('disableFastPrice', tx.transactionHash);

            this.lastSuccessTx = tx.transactionHash;
        }

        this.lastUpdateTime = new Date().toISOString();
    }

    checkPrices = async () => {
        try {
            await this.checkPricesAndDisable();
        } catch (e) {
            this.logger.error('syncPrice', e);

            this.lastError = e.maessage || e;
        }

        setTimeout(() => this.checkPrices(), SYNC_INTERVAL);
    }

    info = () => {
        return {
            lastUpdateTime: this.lastUpdateTime,
            priceLastUpdateTimestamp: this.priceLastUpdateTimestamp,
            lastPrices: this.lastPrices,
            lastPriceBits: this.lastPriceBits,
            lastSuccessTx: this.lastSuccessTx,
            lastErrorTx: this.lastErrorTx,
            lastError: this.lastError,
            contracts: {
                positionRouter: this.configService.get('contracts.positionRouter'),
                vault: this.configService.get('contracts.vault'),
                fastPriceFeed: this.configService.get('contracts.fastPriceFeed'),
                vaultPriceFeed: this.configService.get('contracts.vaultPriceFeed'),
            },
            SYNC_INTERVAL
        }
    }

    tokens = () => tokens;
}
