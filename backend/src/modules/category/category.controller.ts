import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from '../../guards/isAdmin.guard';

@ApiTags("Category")
@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) { }

	@ApiBearerAuth()
    @UseGuards(IsAdminGuard)
	@Post()
	create(@Body() createCategoryDto: CreateCategoryDto) {
		return this.categoryService.create(createCategoryDto);
	}

	@Get()
	findAll() {
		return this.categoryService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.categoryService.findOne(+id);
	}

	@ApiBearerAuth()
    @UseGuards(IsAdminGuard)
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateCategoryDto: CreateCategoryDto) {
		return this.categoryService.update(+id, updateCategoryDto);
	}

	@ApiBearerAuth()
    @UseGuards(IsAdminGuard)
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.categoryService.remove(+id);
	}
}
