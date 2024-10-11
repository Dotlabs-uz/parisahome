import { Column, DataType, Model, Table } from "sequelize-typescript";

enum AdminRole {
    ADMIN = "admin",
    SUPERADMIN = "superAdmin",
}

@Table({ tableName: 'admin' })
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

    @Column({
        type: DataType.ENUM(...Object.values(AdminRole)),
        allowNull: true,
        defaultValue: AdminRole.ADMIN
    })
    role: AdminRole
}