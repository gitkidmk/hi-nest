import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()
  home(): string {
    return 'This is Movie HOME';
  }
}
