import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/multer.option';
import { Multer } from 'multer';
import { CreateCertificateDto, TUpdateCertificateDto } from './dto/create-certificate.dto';
import { IsAdminGuard } from 'src/guards/IsAdmin.guard';

@ApiTags("Certificate")
@Controller('certificate')
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) { }

  @ApiBearerAuth()
  @UseGuards(IsAdminGuard)
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

  @ApiBearerAuth()
  @UseGuards(IsAdminGuard)
  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', multerOptions))
  update(@Param('id') id: string, @Body() updateCertificateDto: TUpdateCertificateDto, @UploadedFile() file: Express.Multer.File) {
    return this.certificateService.update(+id, updateCertificateDto, file);
  }

  @ApiBearerAuth()
  @UseGuards(IsAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificateService.remove(+id);
  }
}
