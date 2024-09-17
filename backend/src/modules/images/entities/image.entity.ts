import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Certificate } from "src/modules/certificate/entities/certificate.entity";
import { Machine } from "src/modules/machines/entities/machine.entity";
import { Product } from "src/modules/product/entities/product.entity";

@Table({ tableName: 'images' })
export class Image extends Model<Image> {
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

    @Column({
        allowNull: true
    })
    @ForeignKey(() => Product)
    productId: number

    @Column({
        allowNull: true
    })
    @ForeignKey(() => Certificate)
    certificateId: number

    @Column({
        allowNull: true
    })
    @ForeignKey(() => Machine)
    machineId: number
}