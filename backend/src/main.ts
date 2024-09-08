import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Parisa Home")
    .setDescription("Документация по API: Parisa Home")
    .setVersion("1.0.0")
    .build()

  app.useStaticAssets(join(__dirname, '..', 'uploads'));

  app.setGlobalPrefix('/api/');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const documet = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("/api/docs", app, documet)


  await app.listen(PORT, () => {
    console.log(`Server started on port = ${PORT}`);
  })


}
bootstrap();
