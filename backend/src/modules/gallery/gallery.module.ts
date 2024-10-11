import { Module } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { GalleryController } from './gallery.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gallery } from './entities/gallery.entity';

@Module({
  imports: [SequelizeModule.forFeature([Gallery])],
  controllers: [GalleryController],
  providers: [GalleryService],
})
export class GalleryModule { }
