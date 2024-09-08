import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsInt, IsOptional, IsString, Length } from "class-validator";

export class CreateProductDto {
    @ApiProperty({ description: "name" })
    @IsString()
    readonly name: string;

    @ApiProperty({ description: "description" })
    @IsString()
    readonly description: string;

    @ApiProperty({ description: "price" })
    @IsInt()
    @Type(() => Number)
    readonly price: number;

    readonly categoryId: number;

    @ApiProperty({
        description: 'The images associated with the product',
        type: 'array',
        items: {
            type: 'string',
            format: 'binary',
        },
    })
    images: Array<Express.Multer.File>;
}