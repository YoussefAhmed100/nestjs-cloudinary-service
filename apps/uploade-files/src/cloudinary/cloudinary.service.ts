// cloudinary.service.ts
import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CloudinaryService {
  constructor(private configService: ConfigService) {

    cloudinary.config({
      cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
    });
  }

async uploadFile(fileBuffer: Buffer, mimetype: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'crm-products',
        resource_type: mimetype.startsWith('image/') ? 'image' : 'raw',
      },
      (error, result) => {
        if (error) return reject(error);
        if (!result || !result.secure_url) {
          return reject(new Error('Cloudinary upload failed: no result returned'));
        }
        resolve(result.secure_url);
      },
    );

    uploadStream.end(fileBuffer);
  });
}

}
