import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { ImagesService } from '../images/images.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Category } from '../category/entities/category.entity';
import { paginateData } from 'src/common/paginateData';

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(Product) private productModel: typeof Product,
		@InjectModel(Category) private categoryModel: typeof Category,
		private imagesService: ImagesService
	) { }

	async create(createProductDto: any, files: Array<Express.Multer.File>) {
		try {
			const category = await this.categoryModel.findByPk(createProductDto.categoryId);

			if (!category) {
				throw new NotFoundException('Категория не найдена');
			}
			const product = await this.productModel.create(createProductDto);
			await this.imagesService.uploadImages(product.dataValues.id, files, "productId")

			return product.reload({include:{all:true}})
		} catch (e) {
			throw new BadRequestException(e.message);
		}
	}

	async findAll(query: any) {
		const paginatedQuery = paginateData(query);


		const [rows, count] = await Promise.all([
			this.productModel.findAll({
				...paginatedQuery,
				include: { all: true }
			}),
			this.productModel.count({
				...paginatedQuery
			})
		]);

		return {
			page: +query.page || 1,
			total: count,
			data: rows
		};
	}

	async findOne(id: number) {
		return this.productModel.findByPk(id, { include: { all: true } });
	}

	async update(id: string, updateProductDto: Partial<CreateProductDto>) {
		try {
			const product = await this.productModel.findByPk(id);
			if (!product) {
				throw new BadRequestException('Product not found');
			}

			const { images, ...productData } = updateProductDto;

			await product.update(productData);

			return {message:"product was update"}
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

			resProduct.destroy()
		} catch (e) {
			throw new BadRequestException(e.message);
		}

		return { message: 'Product was deleted' };
	}
}
