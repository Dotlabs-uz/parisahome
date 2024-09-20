import { Column, Model, Table } from 'sequelize-typescript';
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
        type: DataTypes.TEXT
    })
    question: string;

    @Column({
        type: DataTypes.TEXT
    })
    answer: string;
}