import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';

@ApiTags("Product")
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  @UseInterceptors(FilesInterceptor('images', 10))
  @ApiConsumes('multipart/form-data')
  async create(@Body() createProductDto: CreateProductDto, @UploadedFiles() files: Array<Express.Multer.File>) {
    return await this.productService.create(createProductDto, files );
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
