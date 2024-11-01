import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {IsInt, IsString} from "class-validator";

export class CreateProductDto {
    @ApiProperty({ description: "ruName" })
    @IsString()
    ruName: string;

    @ApiProperty({ description: "uzName" })
    @IsString()
    uzName: string;

    @ApiProperty({ description: "enName" })
    @IsString()
    enName: string;

    @ApiProperty({ description: "jpName" })
    @IsString()
    jpName: string;

    @ApiProperty({ description: "ruDescription" })
    @IsString()
    ruDescription: string;

    @ApiProperty({ description: "uzDescription" })
    @IsString()
    uzDescription: string;

    @ApiProperty({ description: "enDescription" })
    @IsString()
    enDescription: string;

    @ApiProperty({ description: "jpDescription" })
    @IsString()
    jpDescription: string;

    @ApiProperty({ description: "price" })
    @IsInt()
    @Type(() => Number)
    readonly price: number;

    @ApiProperty({ description: "categoryId" })
    @IsInt()
    @Type(() => Number)
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

export type TUpdateProductDto = Partial<CreateProductDto>