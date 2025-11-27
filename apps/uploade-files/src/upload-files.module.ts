import { Module } from '@nestjs/common';
import { UploadFilesController } from './upload-files.controller';
import { UploadFilesService } from './upload-files.service';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/uploade-files/.env',   
    }),
  ],
  controllers: [UploadFilesController],
  providers: [UploadFilesService, CloudinaryService],
})
export class UploadeFilesModule {}
