import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Validation Test with pipe
  //client 에서 보내면 안되는 요소 사전 차단
  //client에서 보내는건 무조건 string -> transform이 entity에 맞게 변화시켜줌?
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

// controller : get URL, execute function
