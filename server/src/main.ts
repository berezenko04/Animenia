import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import helmet from 'helmet';
import { AllExceptionsFilter } from './common/filters/all-exception.filter';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  app.use(helmet());

  app.setGlobalPrefix('api/v1');
  app.enableCors({
    origin: configService.get<string>('FRONTEND_URL'),
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  app.use(cookieParser());

  app.use(express.json({ limit: '500kb' }));
  app.use(express.urlencoded({ limit: '500kb', extended: true }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
