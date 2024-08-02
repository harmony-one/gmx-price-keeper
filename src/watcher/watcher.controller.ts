import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { WatcherService } from './watcher.service';

@ApiTags('watcher')
@Controller('watcher')
export class WatcherController {
  constructor(
    private readonly configService: ConfigService,
    private readonly watcherService: WatcherService
  ) { }

  @Get('/tokens')
  getTokens() {
    return this.watcherService.tokens();
  }

  @Get('/info')
  getInfo() {
    return this.watcherService.info();
  }
}
