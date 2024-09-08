import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { CertificateModule } from './modules/certificate/certificate.module';
import { Product } from './modules/product/entities/product.entity';
import { Category } from './modules/category/entities/category.entity';
import { Certificate } from './modules/certificate/entities/certificate.entity';

@Module({
	imports: [
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: "localhost",
			port: 5432,
			username: "postgres",
			password: "20051978m",
			database: "parisahome",
			models: [Product, Category, Certificate],
			autoLoadModels: true,
			synchronize: true,
		}),
		ProductModule,
		CategoryModule,
		CertificateModule,
	],
	controllers: [AppController]
})
export class AppModule {
}
