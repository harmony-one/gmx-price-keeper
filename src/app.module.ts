import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './configs/config';
import { Web3Module } from 'nest-web3';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { PriceKeeperModule } from './price-keeper/price-keeper.module';
import { PositionKeeperModule } from './position-keeper/position-keeper.module';
import { WatcherModule } from './watcher/watcher.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    Web3Module.forRootAsync({
      useFactory: (configService: ConfigService) => [
        configService.get('hmy'),
      ],
      inject: [ConfigService],
    }),
    Web3Module,
    WatcherModule,
    PriceKeeperModule,
    PositionKeeperModule,
    PrometheusModule.register(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
