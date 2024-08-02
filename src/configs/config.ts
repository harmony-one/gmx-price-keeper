import * as process from 'process';
import { contracts } from './contracts.config'

export default () => ({
  hmy: {
    name: 'hmy',
    url: process.env.HMY_NODE_URL,
  },
  services: {
    priceKeeper: process.env.PRICE_KEEPER_ENABLE || false,
    positionKeeper: process.env.POSITION_KEEPER_ENABLE || false,
    watcher: process.env.WATCHER_ENABLE || false,
  },
  contracts: {
    fastPriceFeed: contracts.FastPriceFeed,
    positionRouter: contracts.PositionRouter,
    vaultPriceFeed: contracts.VaultPriceFeed,
    vault: contracts.Vault,
  },
  keys: {
    keeper: process.env.KEEPER_KEY
  },
  version: process.env.npm_package_version || '0.0.1',
  name: process.env.npm_package_name || '',
  port: parseInt(process.env.PORT, 10) || 8080,
});
