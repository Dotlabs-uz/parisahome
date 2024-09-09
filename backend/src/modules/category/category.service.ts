import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {

  constructor(@InjectModel(Category) private categoryModel: typeof Category) { }

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryModel.create(createCategoryDto);
  }

  async findAll() {
    return await this.categoryModel.findAll()
  }

  async findOne(id: number) {
    return await this.categoryModel.findByPk(id)
  }

  async update(id: number, updateCategoryDto: CreateCategoryDto) {
    return await this.categoryModel.update(updateCategoryDto, { where: { id } })
  }

  async remove(id: number) {
    return await this.categoryModel.destroy({ where: { id } })
  }
}
