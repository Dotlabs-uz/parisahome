import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UseGuards, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/multer.option';
import { IsAdminGuard } from '../../guards/isAdmin.guard';
import { Roles } from 'src/guards/roles.decorator';

@ApiTags("Product")
@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) { }

	@ApiBearerAuth()
	@UseGuards(IsAdminGuard)
	@Roles("admin", "superAdmin")
	@Post()
	@ApiConsumes('multipart/form-data')
	@UseInterceptors(FilesInterceptor('images', 10, multerOptions))
	async create(@Body() createProductDto: CreateProductDto, @UploadedFiles() files: Array<Express.Multer.File>) {
		return await this.productService.create(createProductDto, files);
	}

	@Get()
	async findAll(@Query() query: any) {
		return await this.productService.findAll(query);
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		return await this.productService.findOne(+id);
	}

	@ApiBearerAuth()
	@UseGuards(IsAdminGuard)
	@Roles("admin", "superAdmin")
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
	@ApiBearerAuth()
	@UseGuards(IsAdminGuard)
	@Roles("admin", "superAdmin")
	async remove(@Param('id') id: string) {
		return await this.productService.remove(+id);
	}
}
