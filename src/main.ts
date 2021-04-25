require('newrelic');

import {
  SwaggerModule,
  DocumentBuilder,
} from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import * as mongoose from 'mongoose';

import AppModule from './app.module';
import env from './config/env';

const morgan = require('morgan');

async function bootstrap() {
  mongoose.set('debug', true);
  mongoose.pluralize(null);

  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('NestJS boilerplate')
    .setDescription('NestJS boilerplate for getting started')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  app.use(morgan('tiny'));
  await app.listen(env.port);
}
bootstrap();
