import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ApiBearerAuth, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { IsAdminGuard } from 'src/guards/isAdmin.guard';
import { Roles } from 'src/guards/roles.decorator';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/multer.option';
import { CreateimageDto } from './dto/createImage.dto';

@ApiTags("Images")
@Controller('images')
export class ImagesController {
	constructor(private readonly imagesService: ImagesService) { }

	@ApiBearerAuth()
	@UseGuards(IsAdminGuard)
	@Roles('admin', 'superAdmin')
	@Post()
	@ApiConsumes('multipart/form-data')
	@UseInterceptors(FilesInterceptor('images', 10, multerOptions))
	async create(@Body() createProductDto: CreateimageDto, @UploadedFiles() files: Array<Express.Multer.File>) {
		return await this.imagesService.uploadImages(+createProductDto.id, files, 'productId');
	}

	@ApiBearerAuth()
	@UseGuards(IsAdminGuard)
	@Roles('admin', 'superAdmin')
	@Delete(':id')
	@ApiParam({ name: 'id', required: true })
	async delete(@Param('id') id: number) {
		return await this.imagesService.deleteImageById(id, 'productId');
	}

	@ApiBearerAuth()
	@UseGuards(IsAdminGuard)
	@Roles('admin', 'superAdmin')
	@Patch(':imageId/:productId')
	@ApiParam({ name: 'imageId', required: true, description: 'ID of the image to update' })
	@ApiParam({ name: 'productId', required: true, description: 'ID of the associated product' })
	async patch(
		@Param() params: { imageId: string; productId: string }
	): Promise<any> {
		const { imageId, productId } = params;
		return this.imagesService.updateImage(+imageId, +productId);
	}
}
