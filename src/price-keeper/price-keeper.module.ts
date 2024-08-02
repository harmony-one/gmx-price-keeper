import { Module } from '@nestjs/common';
import { PriceKeeperController } from './price-keeper.controller';
import { PriceKeeperService } from './price-keeper.service';

@Module({
  imports: [],
  controllers: [PriceKeeperController],
  providers: [PriceKeeperService],
})
export class PriceKeeperModule {}
