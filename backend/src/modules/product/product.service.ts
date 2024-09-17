import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { ImagesService } from '../images/images.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Category } from '../category/entities/category.entity';

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(Product) private productModel: typeof Product,
		private imagesService: ImagesService
	) { }

	async create(createProductDto: any, files: Array<Express.Multer.File>) {
		try {
			const category = await Category.findByPk(createProductDto.categoryId);

			if (!category) {
				throw new NotFoundException('Категория не найдена');
			}
			const product = await this.productModel.create(createProductDto);
			await this.imagesService.uploadImages(product.dataValues.id, files, "productId")

			return this.productModel.findByPk(product.dataValues.id, { include: { all: true } });
		} catch (e) {
			throw new BadRequestException(e.message);
		}
	}

	async findAll() {
		return this.productModel.findAll({ include: { all: true } });
	}

	async findOne(id: number) {
		return this.productModel.findByPk(id, { include: { all: true } });
	}

	async update(id: string, updateProductDto: Partial<CreateProductDto>, files: Array<Express.Multer.File>) {
		try {
			const product = await this.productModel.findByPk(id);
			if (!product) {
				throw new BadRequestException('Product not found');
			}

			const { images, ...productData } = updateProductDto;

			await product.update(productData);

			if (files && files.length > 0) {

				await this.imagesService.deleteImages(product.dataValues.id, "productId");

				await this.imagesService.uploadImages(product.dataValues.id, files, 'productId');
			}

			return this.productModel.findByPk(id, { include: { all: true } });
		} catch (e) {
			throw new BadRequestException(e.message);
		}
	}


	async remove(id: number) {
		try {
			const resProduct = await this.productModel.findByPk(id, { include: { all: true } });

			if (!resProduct) {
				throw new BadRequestException('Product not found');
			}
			await this.imagesService.deleteImages(resProduct.dataValues.id, "productId");

			await this.productModel.destroy({ where: { id: id } });

		} catch (e) {
			throw new BadRequestException(e.message);
		}

		return { message: 'Product was deleted' };
	}
}
