import { Module } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { CertificateController } from './certificate.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Certificate } from './entities/certificate.entity';
import { ImagesModule } from '../images/images.module';

@Module({
  imports: [SequelizeModule.forFeature([Certificate]), ImagesModule],
  controllers: [CertificateController],
  providers: [CertificateService],
})
export class CertificateModule { }
