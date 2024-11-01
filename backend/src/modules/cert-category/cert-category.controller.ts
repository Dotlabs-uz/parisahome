import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../../guards/isAdmin.guard';
import { Roles } from 'src/guards/roles.decorator';
import { CertCategoryService } from './cert-category.service';
import { CreateCertCategoryDto } from './dto/create-cert-category.dto';

@ApiTags("Certificate Category")
@Controller('cert-category')
export class CertCategoryController {
  constructor(private readonly certCategoryService: CertCategoryService) { }

  @ApiBearerAuth()
  @UseGuards(IsAdminGuard)
  @Roles("admin", "superAdmin")
  @Post()
  create(@Body() createCertCategoryDto: CreateCertCategoryDto) {
    return this.certCategoryService.create(createCertCategoryDto);
  }

  @Get()
  findAll() {
    return this.certCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certCategoryService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(IsAdminGuard)
  @Roles("admin", "superAdmin")
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCertCategoryDto: Partial<CreateCertCategoryDto>) {
    return this.certCategoryService.update(+id, updateCertCategoryDto);
  }

  @ApiBearerAuth()
  @UseGuards(IsAdminGuard)
  @Roles("admin", "superAdmin")
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certCategoryService.remove(+id);
  }
}

