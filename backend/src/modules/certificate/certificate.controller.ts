import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/multer.option';
import { Multer } from 'multer';
import { CreateCertificateDto, TUpdateCertificateDto } from './dto/create-certificate.dto';

@ApiTags("Certificate")
@Controller('certificate')
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) { }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', multerOptions))
  create(@Body() createCertificateDto: CreateCertificateDto, @UploadedFile() file: Express.Multer.File) {
    return this.certificateService.create(createCertificateDto, file);
  }

  @Get()
  findAll() {
    return this.certificateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificateService.findOne(+id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', multerOptions))
  update(@Param('id') id: string, @Body() updateCertificateDto: TUpdateCertificateDto, @UploadedFile() file: Express.Multer.File) {
    return this.certificateService.update(+id, updateCertificateDto, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificateService.remove(+id);
  }
}
