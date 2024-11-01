import { Module } from '@nestjs/common';
import { CertCategoryService } from './cert-category.service';
import { CertCategoryController } from './cert-category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CertCategory } from './entities/cert-category.entity';

@Module({
  imports:[SequelizeModule.forFeature([CertCategory])],
  controllers: [CertCategoryController],
  providers: [CertCategoryService],
})
export class CertCategoryModule {}
