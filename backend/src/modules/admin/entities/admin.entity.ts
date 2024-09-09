import {Column, Model, Table} from "sequelize-typescript";

@Table({tableName: 'admin'})
export class Admin extends Model<Admin> {
    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id: number
    
    @Column({
        unique: true
    })
    login: string
    
    @Column
    password: string
}