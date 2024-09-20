import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { CertificateModule } from './modules/certificate/certificate.module';
import { Product } from './modules/product/entities/product.entity';
import { Category } from './modules/category/entities/category.entity';
import { Certificate } from './modules/certificate/entities/certificate.entity';
import { ImagesModule } from './modules/images/images.module';
import { Image } from './modules/images/entities/image.entity';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AdminModule } from './modules/admin/admin.module';
import { Admin } from './modules/admin/entities/admin.entity';
import { JwtModule } from '@nestjs/jwt';
import { MachinesModule } from './modules/machines/machines.module';
import { Machine } from './modules/machines/entities/machine.entity';
import { QuestionModule } from './modules/question/question.module';
import { Question } from './modules/question/entities/question.entity';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'uploads')
		}),
		SequelizeModule.forRoot({
			dialect: "postgres",
			host: process.env.POSTGRES_HOST,
			port: +process.env.POSTGRES_PORT,
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
			models: [Product, Category, Certificate, Image, Admin, Machine, Question],
			autoLoadModels: true,
			synchronize: true,
			sync: { alter: true },
			logging: false
		}),
		JwtModule.register({
			global: true,
			secret: process.env.JWT_SECRET,
			signOptions: { expiresIn: '5d' },
		}),
		ProductModule,
		CategoryModule,
		CertificateModule,
		ImagesModule,
		AdminModule,
		MachinesModule,
		QuestionModule,
	],
	controllers: [AppController]
})
export class AppModule {
}
