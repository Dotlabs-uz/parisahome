import { Column, Model, Table, HasOne, DataType } from 'sequelize-typescript';
import { Image } from 'src/modules/images/entities/image.entity';

@Table({ tableName: 'machines' })
export class Machine extends Model<Machine> {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    })
    id: number

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

    @HasOne(() => Image)
    image: Image;
}