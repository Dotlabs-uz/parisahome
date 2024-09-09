import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Image } from 'src/modules/images/entities/image.entity';

@Table({ tableName: 'certificate' })
export class Certificate extends Model<Certificate> {
  @Column
  title: string;

  @Column
  description: string;

  @HasMany(() => Image)
  images: Image[];
}