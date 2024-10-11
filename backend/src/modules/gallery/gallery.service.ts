import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Gallery } from './entities/gallery.entity';
import { unlink } from 'fs/promises';
import * as path from 'path';

@Injectable()
export class GalleryService {
	constructor(@InjectModel(Gallery) private galleryModel: typeof Gallery,) { }
	url = `${process.env.DOMAIN}/uploads/`;

	async create(file: Express.Multer.File) {
		const link = `${this.url}${file.filename}`;

		const image = {
			url: link,
			size: file.size,
			mimetype: file.mimetype,
		};

		try {
			await this.galleryModel.create(image);

			return { message: "Photo was added to gallery" }
		} catch (e) {
			throw new BadRequestException('Cannot upload gallery');
		}
	}

	async findAll() {
		return await this.galleryModel.findAll();
	}

	async update(id: number, file: Express.Multer.File) {
		const image = await this.galleryModel.findOne({ where: { id } });

		if (!image) throw new NotFoundException();

		const link = `${this.url}${file.filename}`;

		const updatedImageData = {
			url: link,
			size: file.size,
			mimetype: file.mimetype,
		};

		try {
			await this.galleryModel.update(updatedImageData, {
				where: { id }
			});
			await this.deleteGalleryImage(image);
			return { message: "Photo was updated" };
		} catch (e) {
			throw new BadRequestException(e.message);
		}
	}

	async remove(id: number) {
		const image = await this.galleryModel.findOne({ where: { id } });

		if (!image) throw new NotFoundException();

		try {
			this.galleryModel.destroy({ where: { id } })

			await this.deleteGalleryImage(image)

			return { message: "photo was deleted" }
		} catch (e) {
			throw new BadRequestException(e.message);
		}

	}

	async deleteGalleryImage(image: any) {
		const imagePath = path.join(__dirname, '../../../uploads/', image.dataValues.url.split("/").at(-1));

		try {
			await unlink(imagePath);
			return true
		} catch (error) {
			console.error(`Failed to delete gallery image file: ${imagePath}`, error);
			return false
		}
	}

}
