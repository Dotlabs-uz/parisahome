import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCertificateDto {
    @ApiProperty({ description: "title" })
    @IsString()
    readonly title: string;

    @ApiProperty({ description: "description" })
    @IsString()
    readonly description: string;

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