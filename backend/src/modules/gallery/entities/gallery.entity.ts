import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Gallery' })
export class Gallery extends Model<Gallery> {
    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id: number

    @Column
    url: string

    @Column
    size: number

    @Column
    mimetype: string
}