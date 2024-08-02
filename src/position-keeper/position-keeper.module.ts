import { Module } from '@nestjs/common';
import { PositionKeeperController } from './position-keeper.controller';
import { PositionKeeperService } from './position-keeper.service';

@Module({
  imports: [],
  controllers: [PositionKeeperController],
  providers: [PositionKeeperService],
})
export class PositionKeeperModule {}
