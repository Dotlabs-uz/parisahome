import { Column, Model, Table, HasMany, DataType } from 'sequelize-typescript';
import { Product } from 'src/modules/product/entities/product.entity';

@Table({ tableName: 'category' })
export class Category extends Model<Category> {
  
  @Column({
    type: DataType.TEXT
  })
  ruTitle: string;

  @Column({
    type: DataType.TEXT
  })
  uzTitle: string;

  @Column({
    type: DataType.TEXT
  })
  enTitle: string;

  @Column({
    type: DataType.TEXT
  })
  jpTitle: string;

  @HasMany(() => Product)
  products: Product[];
}