import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { CertCategory } from 'src/modules/cert-category/entities/cert-category.entity';
import { Image } from 'src/modules/images/entities/image.entity';

@Table({ tableName: 'certificate' })
export class Certificate extends Model<Certificate> {
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

  @HasMany(() => Image)
  images: Image[];

  @ForeignKey(() => CertCategory)
  @Column
  categoryId: number;

  @BelongsTo(() => CertCategory)
  category: CertCategory;
}