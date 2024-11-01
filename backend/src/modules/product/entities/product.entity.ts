import { Column, Model, Table, ForeignKey, BelongsTo, HasMany, DataType } from 'sequelize-typescript';
import { Category } from 'src/modules/category/entities/category.entity';
import { Image } from 'src/modules/images/entities/image.entity';

@Table({ tableName: 'products' })
export class Product extends Model<Product> {
  @Column({
    type: DataType.TEXT
  })
  ruName: string;

  @Column({
    type: DataType.TEXT
  })
  uzName: string;

  @Column({
    type: DataType.TEXT
  })
  enName: string;

  @Column({
    type: DataType.TEXT
  })
  jpName: string;

  @Column({
    type: DataType.TEXT
  })
  ruDescription: string;

  @Column({
    type: DataType.TEXT
  })
  uzDescription: string;

  @Column({
    type: DataType.TEXT
  })
  enDescription: string;

  @Column({
    type: DataType.TEXT
  })
  jpDescription: string;

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
