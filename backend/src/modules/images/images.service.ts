import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Image } from './entities/image.entity';
import path from 'path';
import { unlink } from 'fs/promises';

@Injectable()
export class ImagesService {
	url = `${process.env.DOMAIN}/uploads/`;

	constructor(@InjectModel(Image) private readonly imageModel: typeof Image) { }



	async uploadImages(id: number, files: any, service: string) {
		const images = [];

		for (let file of files) {

			const link = `${this.url}${file.filename}`;

			images.push({
				url: link,
				size: file.size,
				mimetype: file.mimetype,
				[service]: id
			});
		}

		try {
			await this.imageModel.bulkCreate(images);
		} catch (e) {
			throw new BadRequestException('Cannot upload images');
		}
	}

	async uploadImage(id: number, file: any, service: string) {
		const link = `${this.url}${file.filename}`;

		const image = {
			url: link,
			size: file.size,
			mimetype: file.mimetype,
			[service]: id
		};

		try {
			await this.imageModel.create(image);
		} catch (e) {
			throw new BadRequestException('Cannot upload images');
		}
	}

	async findImagesByProductId(productId: string) {
		return await this.imageModel.findAll({ where: { productId } });
	}

	// Удалить изображения с диска и из базы данных
	async deleteImages(images: any[]) {
		for (const image of images) {
			const imagePath = path.join(__dirname, '../../uploads/', image.url); // Путь к файлу на диске
			try {
				await unlink(imagePath); // Удаление файла с диска
			} catch (error) {
				console.error(`Failed to delete image file: ${imagePath}`, error);
			}
			await image.destroy(); // Удаление записи из базы данных
		}
	}
}
