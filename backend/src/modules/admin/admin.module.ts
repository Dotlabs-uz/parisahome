import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './entities/admin.entity';
import { AuthService } from 'src/common/auth/auth.service';

@Module({
  imports:[SequelizeModule.forFeature([Admin])],
  controllers: [AdminController],
  providers: [AdminService,AuthService],
})
export class AdminModule {}
