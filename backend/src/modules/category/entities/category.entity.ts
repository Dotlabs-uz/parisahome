import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Product } from 'src/modules/product/entities/product.entity';

@Table({ tableName: 'category' })
export class Category extends Model<Category> {
  @Column
  name: string;

  @HasMany(() => Product)
  products: Product[];
}