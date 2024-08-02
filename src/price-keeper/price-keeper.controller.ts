import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { PriceKeeperService } from './price-keeper.service';

@ApiTags('price-keeper')
@Controller('price-keeper')
export class PriceKeeperController {
  constructor(
    private readonly configService: ConfigService,
    private readonly keeperService: PriceKeeperService
  ) { }
  @Get('/test')
  getTest() {
    return this.keeperService.test();
  }

  @Get('/tokens')
  getTokens() {
    return this.keeperService.tokens();
  }

  @Get('/info')
  getInfo() {
    return this.keeperService.info();
  }
}
