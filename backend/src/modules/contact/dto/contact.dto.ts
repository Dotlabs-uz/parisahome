import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class ContactDto {
    @ApiProperty({ description: "name" })
    @IsString()
    readonly name: string;

    @ApiProperty({ description: "email" })
    @IsEmail()
    readonly email: string;

    @ApiProperty({ description: "message" })
    @IsString()
    readonly message: string
}