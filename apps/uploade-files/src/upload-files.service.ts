import { Injectable, BadRequestException } from '@nestjs/common';
import { CloudinaryService } from './cloudinary/cloudinary.service';

@Injectable()
export class UploadFilesService {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  private validateFileType(mimetype: string) {
    const allowedMimeTypes = [
      'audio/mpeg',            // mp3
      'video/mp4',             
      'application/pdf',       
      'image/jpeg',            // jpg, jpeg
      'image/png',             
      'image/gif',
       'application/vnd.openxmlformats-officedocument.wordprocessingml.document',             
    ];

    if (!allowedMimeTypes.includes(mimetype)) {
      throw new BadRequestException(
        `Unsupported file type ${mimetype}. Allowed types: mp3, mp4, pdf, jpg, jpeg, png, gif`,
      );
    }
  }

  async uploadSingleFile(file: Express.Multer.File): Promise<string> {
    if (!file) throw new BadRequestException('No file uploaded');
    this.validateFileType(file.mimetype);
     return await this.cloudinaryService.uploadFile(file.buffer, file.mimetype);
  }

  async uploadMultipleFiles(files: Express.Multer.File[]): Promise<string[]> {
    if (!files || files.length === 0) throw new BadRequestException('No files uploaded');
    files.forEach(file => this.validateFileType(file.mimetype));
    
    const urls: string[] = [];
    for (const file of files) {
      const url = await this.cloudinaryService.uploadFile(file.buffer, file.mimetype);
      urls.push(url);
    }
    return urls;
  }
}
