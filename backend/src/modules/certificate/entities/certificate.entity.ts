import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Certificate extends Model<Certificate> {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  imageUrl: string;
}
