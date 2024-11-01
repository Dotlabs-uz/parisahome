import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsString } from "class-validator";

export class CreateCertificateDto {

    @ApiProperty({ description: "description" })
    @IsString()
    readonly description: string;

    @ApiProperty({ description: "ruTitle" })
    @IsString()
    ruTitle: string;

    @ApiProperty({ description: "uzTitle" })
    @IsString()
    uzTitle: string;

    @ApiProperty({ description: "enTitle" })
    @IsString()
    enTitle: string;

    @ApiProperty({ description: "jpTitle" })
    @IsString()
    jpTitle: string;

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
    image: Array<Express.Multer.File>;
}

export type TUpdateCertificateDto = Partial<CreateCertificateDto>