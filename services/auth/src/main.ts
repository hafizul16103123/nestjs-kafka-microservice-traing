// Make sure to import the SDK before any other modules
import { otelSDK } from './tracing';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  await otelSDK.start()
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['kafka:29092'],
        },
        consumer: {
          groupId: 'auth-consumer',
        },
      },
    });
  await app.startAllMicroservices();
  app.listen(4002)
}
bootstrap();
