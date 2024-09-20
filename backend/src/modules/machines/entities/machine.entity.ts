import { Column, Model, Table, HasOne } from 'sequelize-typescript';
import { Image } from 'src/modules/images/entities/image.entity';

@Table({ tableName: 'machines' })
export class Machine extends Model<Machine> {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    })
    id: number

    @Column
    name: string;

    @Column
    description: string;

    @Column
    price: number;

    @HasOne(() => Image)
    image: Image;
}