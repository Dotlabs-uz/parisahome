import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CertCategory } from './entities/cert-category.entity';
import { CreateCertCategoryDto } from './dto/create-cert-category.dto';

@Injectable()
export class CertCategoryService {

  constructor(@InjectModel(CertCategory) private certCategoryModel: typeof CertCategory) { }

  async create(createCategoryDto: CreateCertCategoryDto) {
    return await this.certCategoryModel.create(createCategoryDto);
  }

  async findAll() {
    return await this.certCategoryModel.findAll()
  }

  async findOne(id: number) {
    return await this.certCategoryModel.findByPk(id)
  }

  async update(id: number, updateCategoryDto: Partial<CreateCertCategoryDto>) {
    return await this.certCategoryModel.update(updateCategoryDto, { where: { id } })
  }

  async remove(id: number) {
    return await this.certCategoryModel.destroy({ where: { id } })
  }
}
