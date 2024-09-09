import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, TUpdateProductDto } from './dto/create-product.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/multer.option';
import { Category } from '../category/entities/category.entity';

@ApiTags("Product")
@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) { }

	@Post()
	@ApiConsumes('multipart/form-data')
	@UseInterceptors(FilesInterceptor('images', 10, multerOptions))
	async create(@Body() createProductDto: CreateProductDto, @UploadedFiles() files: Array<Express.Multer.File>) {
		return await this.productService.create(createProductDto, files);
	}

	@Get()
	async findAll() {
		return await this.productService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		return await this.productService.findOne(+id);
	}

	@Patch(':id')
	@ApiConsumes('multipart/form-data')
	@UseInterceptors(FilesInterceptor('images', 10, multerOptions))
	async update(
		@Param('id') id: string,
		@Body() updateProductDto: Partial<CreateProductDto>, // Допускает частичное обновление
		@UploadedFiles() files: Array<Express.Multer.File>
	) {
		return await this.productService.update(id, updateProductDto, files);
	}

	@Delete(':id')
	async remove(@Param('id') id: string) {
		return await this.productService.remove(+id);
	}
}
