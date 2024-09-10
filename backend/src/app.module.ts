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
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AdminModule } from './modules/admin/admin.module';
import { Admin } from './modules/admin/entities/admin.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'uploads')
		}),
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: "localhost",
			port: 5432,
			username: "postgres",
			password: "20051978m",
			database: "parisahome",
			models: [Product, Category, Certificate, Image, Admin],
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
	],
	controllers: [AppController]
})
export class AppModule {
}
