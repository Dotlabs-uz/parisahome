import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { DataTypes } from "sequelize"

@Table({ tableName: 'questions' })
export class Question extends Model<Question> {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    })
    id: number

    @Column({
        type: DataType.TEXT
    })
    ruQuestion: string;

    @Column({
        type: DataType.TEXT
    })
    uzQuestion: string;

    @Column({
        type: DataType.TEXT
    })
    enQuestion: string;

    @Column({
        type: DataType.TEXT
    })
    jpQuestion: string;

    @Column({
        type: DataType.TEXT
    })
    ruAnswer: string;

    @Column({
        type: DataType.TEXT
    })
    uzAnswer: string;

    @Column({
        type: DataType.TEXT
    })
    enAnswer: string;

    @Column({
        type: DataType.TEXT
    })
    jpAnswer: string;
}