import { Column, Model, Table, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Category } from 'src/modules/category/entities/category.entity';
import { Image } from 'src/modules/images/entities/image.entity';

@Table({ tableName: 'products' })
export class Product extends Model<Product> {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  price: number;

  @HasMany(() => Image)
  images: Image[];

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;
}
