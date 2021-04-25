import { Controller, Get } from '@nestjs/common';

import AppService from './app.service';
import HealthModel from './models/health.model';

@Controller()
export default class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth(): HealthModel {
    return this.appService.getHealth();
  }
}
