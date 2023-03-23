// Make sure to import the SDK before any other modules
import { otelSDK } from './tracing';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const otl = await otelSDK.start()
  console.log({otl})
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
