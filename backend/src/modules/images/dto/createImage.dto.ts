import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateimageDto {
    @ApiProperty({ description: 'Product id' })
    @IsString()
    readonly id: string;

    @ApiProperty({
        description: 'The images associated with the product',
        type: 'array',
        items: {
            type: 'string',
            format: 'binary',
        },
    })
    readonly images: Array<Express.Multer.File>;
}