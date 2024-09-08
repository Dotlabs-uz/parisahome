import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Category } from 'src/modules/category/entities/category.entity';

@Table({ tableName: 'products' })
export class Product extends Model<Product> {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  price: number;

  @Column
  imageUrl: string; // Store image path from the uploads folder

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;
}
