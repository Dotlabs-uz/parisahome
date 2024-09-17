import { Module } from '@nestjs/common';
import { MachinesService } from './machines.service';
import { MachinesController } from './machines.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Machine } from './entities/machine.entity';
import { ImagesService } from '../images/images.service';
import { ImagesModule } from '../images/images.module';

@Module({
  imports:[SequelizeModule.forFeature([Machine]),ImagesModule],
  controllers: [MachinesController],
  providers: [MachinesService],
})
export class MachinesModule {}
