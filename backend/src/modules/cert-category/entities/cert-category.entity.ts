
import { Column, Model, Table, HasMany, DataType } from 'sequelize-typescript';
import { Certificate } from 'src/modules/certificate/entities/certificate.entity';

@Table({ tableName: 'cert-category' })
export class CertCategory extends Model<CertCategory> {
  
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

  @HasMany(() => Certificate)
  certificates: Certificate[];
}