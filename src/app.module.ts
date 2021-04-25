import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import AppController from './app.controller';
import AppService from './app.service';
import env from './config/env';

@Module({

  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
