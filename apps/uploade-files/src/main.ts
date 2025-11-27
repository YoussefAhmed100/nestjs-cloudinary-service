import { NestFactory } from '@nestjs/core';
import { UploadeFilesModule } from './upload-files.module';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(UploadeFilesModule);


  const config = new DocumentBuilder()
    .setTitle('Cloudinary File Upload API')
    .setDescription('API to upload single or multiple images to Cloudinary')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  const url = `localhost:` + port;
  console.log(`🚀 Server is running at ${url}`);
  console.log(`📚 Swagger UI available at ${url}/api`);
}

bootstrap();
