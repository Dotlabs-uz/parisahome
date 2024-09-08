import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';
import { Multer } from 'multer';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private productModel: typeof Product) { }

  async create(createProductDto: CreateProductDto, files: Array<Express.Multer.File>) {
    console.log(createProductDto);
    
    return this.productModel.create(createProductDto);
  }

  async findAll() {
    return this.productModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.productModel.findByPk(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.productModel.update(updateProductDto, { where: { id: id } });
  }

  async remove(id: number) {
    return this.productModel.destroy({ where: { id: id } });
  }
}
