import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);//1

  await app.listen(3000);//1을 호출하고, 3천에 띄운다.
}
bootstrap();
