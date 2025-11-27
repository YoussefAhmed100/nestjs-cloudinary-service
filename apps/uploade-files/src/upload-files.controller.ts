import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadFilesService } from './upload-files.service';

import {
  ApiTags,
  ApiConsumes,
  ApiBody,
  ApiOperation,
} from '@nestjs/swagger';


@ApiTags('Uploads')
@Controller('upload')
export class UploadFilesController {
  constructor(private readonly uploadFilesService: UploadFilesService) {}

  @Post('single')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload a single file' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadSingleFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is required');
    }
    const url = await this.uploadFilesService.uploadSingleFile(file);
    return { url };
  }

  @Post('multiple')
  @UseInterceptors(FilesInterceptor('files'))
  @ApiOperation({ summary: 'Upload multiple files' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })
  async uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[]) {
    if (!files || files.length === 0) {
      throw new BadRequestException('Files are required');
    }
    const urls = await this.uploadFilesService.uploadMultipleFiles(files);
    return { urls };
  }
}
