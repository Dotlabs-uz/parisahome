import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty({ description: "ruTitle" })
    @IsString()
    readonly ruTitle: string;

    @ApiProperty({ description: "uzTitle" })
    @IsString()
    readonly uzTitle: string;

    @ApiProperty({ description: "enTitle" })
    @IsString()
    readonly enTitle: string;

    @ApiProperty({ description: "jpTitle" })
    @IsString()
    readonly jpTitle: string;
}