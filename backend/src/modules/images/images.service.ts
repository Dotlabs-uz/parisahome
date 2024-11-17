import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Image } from './entities/image.entity';
import * as path from 'path';
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

		return { message: 'Image was creater' }
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

	async findImagesByProductId(id: string, service: string) {
		return await this.imageModel.findAll({ where: { [service]: id } });
	}

	// Удалить изображения с диска и из базы данных
	async deleteImages(id: number, service: string) {
		const images = await this.imageModel.findAll({ where: { [service]: id } });

		for (const image of images) {

			const imagePath = path.join(__dirname, '../../../uploads/', image.dataValues.url.split("/").at(-1)); // Путь к файлу на диске

			try {
				await unlink(imagePath); // Удаление файла с диска\
				const resImage = await this.imageModel.findByPk(image.dataValues.id);
				await resImage.destroy()
			} catch (error) {
				console.error(`Failed to delete image file: ${imagePath}`, error);
			}
		}
	}

	async deleteImageById(id: number, service: string) {
		const image = await this.imageModel.findByPk(id);

		const imagePath = path.join(__dirname, '../../../uploads/', image.dataValues.url.split("/").at(-1)); // Путь к файлу на диске

		try {
			await unlink(imagePath); // Удаление файла с диска
			await image.destroy()
		} catch (error) {
			console.error(`Failed to delete image file: ${imagePath}`, error);
		}
	}


	async updateImage(imageId: number, productId: number) {
		try {
			await this.imageModel.update(
				{ isMain: false },
				{ where: { productId } }
			);

			await this.imageModel.update(
				{ isMain: true },
				{ where: { id: imageId, productId } }
			);
		} catch (error) {
			throw new BadRequestException(error.message)
		}

		return {messsage:'Image was update'}
	}
}
