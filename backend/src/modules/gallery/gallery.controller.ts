import { Controller, Get, Post, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/guards/roles.decorator';
import { IsAdminGuard } from 'src/guards/isAdmin.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/multer.option';
import { GalleryPost } from 'src/common/swagger.types';

@ApiTags("Gallery")
@Controller('gallery')
export class GalleryController {
	constructor(private readonly galleryService: GalleryService) { }

	@ApiBearerAuth()
	@UseGuards(IsAdminGuard)
	@Roles("admin", "superAdmin")
	@ApiConsumes('multipart/form-data')
	@ApiBody({
        schema: {
            type: 'object',
            properties: GalleryPost,
        },
    })
	@UseInterceptors(FileInterceptor('image', multerOptions))
	@Post()
	create(@UploadedFile() file: Express.Multer.File) {
		return this.galleryService.create(file);
	}

	@Get()
	findAll() {
		return this.galleryService.findAll();
	}

	@ApiBearerAuth()
	@UseGuards(IsAdminGuard)
	@Roles("admin", "superAdmin")
	@ApiConsumes('multipart/form-data')
	@ApiBody({
        schema: {
            type: 'object',
            properties: GalleryPost,
        },
    })
	@UseInterceptors(FileInterceptor('image', multerOptions))
	@Patch(':id')
	update(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
		return this.galleryService.update(+id, file);
	}

	@ApiBearerAuth()
	@UseGuards(IsAdminGuard)
	@Roles("admin", "superAdmin")
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.galleryService.remove(+id);
	}
}
