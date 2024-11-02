import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Certificate } from './entities/certificate.entity';
import { ImagesService } from '../images/images.service';
import { CertCategory } from '../cert-category/entities/cert-category.entity';
import { FindOptions } from 'sequelize';

@Injectable()
export class CertificateService {
	constructor(
		@InjectModel(Certificate) private certificateModel: typeof Certificate,
		@InjectModel(CertCategory) private certCategory: typeof CertCategory,
		private imagesService: ImagesService
	) { }

	async create(createCertificateDto: any, file: Express.Multer.File) {
		try {
			const category = await this.certCategory.findByPk(createCertificateDto.categoryId);

			if (!category) {
				throw new NotFoundException('Категория не найдена');
			}
			const certificate = await this.certificateModel.create(createCertificateDto);
			await this.imagesService.uploadImage(certificate.dataValues.id, file, "certificateId")

			return this.certificateModel.findByPk(certificate.dataValues.id, { include: { all: true } });
		} catch (e) {
			throw new BadRequestException(e.message);
		}
	}

	async findAll(query: any) {
		const { categoryId } = query;

		const options: FindOptions<Certificate> = categoryId
			? { where: { categoryId }, include: { all: true } as const }
			: { include: { all: true } as const };
		const certificates = await this.certificateModel.findAll(options);

		return certificates;
	}

	async findOne(id: number) {
		return this.certificateModel.findByPk(id, { include: { all: true } });
	}

	async update(id: number, updateCertificateDto: any, file: Express.Multer.File) {
		try {
			const certificate = await this.certificateModel.findByPk(id);
			if (!certificate) {
				throw new BadRequestException('Product not found');
			}

			const { image, ...productData } = updateCertificateDto;

			await this.certificateModel.update(productData, { where: { id } });

			if (file) {

				await this.imagesService.deleteImages(certificate.dataValues.id, "certificateId");

				await this.imagesService.uploadImage(certificate.dataValues.id, file, 'certificateId');
			}

			return this.certificateModel.findByPk(id, { include: { all: true } });
		} catch (e) {
			throw new BadRequestException(e.message);
		}
	}


	async remove(id: number) {
		try {
			const resCertificate = await this.certificateModel.findByPk(id, { include: { all: true } });

			if (!resCertificate) {
				throw new BadRequestException('Certificate not found');
			}
			await this.imagesService.deleteImages(resCertificate.dataValues.id, "certificateId");

			await this.certificateModel.destroy({ where: { id: id } });

		} catch (e) {
			throw new BadRequestException(e.message);
		}

		return { message: 'Certificate was deleted' };
	}
}
