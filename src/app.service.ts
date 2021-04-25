import { Injectable } from '@nestjs/common';

import HealthModel from './models/health.model';

@Injectable()
export default class AppService {
  getHealth(): HealthModel {
    return new HealthModel('Up and Running');
  }
}
