import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class ContactDto {
    @ApiProperty({ description: "name" })
    @IsString()
    readonly name: string;

    @ApiProperty({ description: "Telephone number" })
    @IsPhoneNumber("UZ", { message: 'Invalid phone number' })
    readonly telNumber: string;

    @ApiProperty({ description: "email" })
    @IsEmail()
    readonly email: string;

    @ApiProperty({ description: "message" })
    @IsString()
    readonly message: string
}