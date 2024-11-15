import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { ImagesModule } from '../images/images.module';
import { Category } from '../category/entities/category.entity';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    SequelizeModule.forFeature([Product,Category]),
    ImagesModule
  ],
})
export class ProductModule { }
