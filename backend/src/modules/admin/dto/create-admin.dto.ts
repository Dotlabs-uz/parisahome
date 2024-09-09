import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class AdminsDto {
    @ApiProperty({description: "login", nullable: false})
    @IsString()
    login: string
    
    @ApiProperty({description: "password", nullable: false})
    @IsString()
    password: string
}