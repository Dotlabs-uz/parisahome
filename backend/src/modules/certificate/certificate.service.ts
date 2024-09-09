import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Certificate } from './entities/certificate.entity';
import { ImagesService } from '../images/images.service';

@Injectable()
export class CertificateService {
  constructor(
    @InjectModel(Certificate) private certificateModel: typeof Certificate,
    private imagesService: ImagesService
  ) { }

  async create(createCertificateDto: any, file: Express.Multer.File) {
    try {
      const certificate = await this.certificateModel.create(createCertificateDto);
      await this.imagesService.uploadImage(certificate.dataValues.id, file, "certificateId")

      return this.certificateModel.findByPk(certificate.dataValues.id, { include: { all: true } });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async findAll() {
    return this.certificateModel.findAll({ include: { all: true } });
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
        const oldImages = await this.imagesService.findImagesByProductId(certificate.dataValues.id);

        await this.imagesService.deleteImages(oldImages);

        await this.imagesService.uploadImage(certificate.dataValues.id, file, 'certificateId');
      }

      return this.certificateModel.findByPk(id, { include: { all: true } });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }


  async remove(id: number) {
    return this.certificateModel.destroy({ where: { id: id } });
  }
}
