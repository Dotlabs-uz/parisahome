import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateQuestionDto {

    @ApiProperty({ description: "ruQuestion" })
    @IsString()
    ruQuestion: string;

    @ApiProperty({ description: "uzQuestion" })
    @IsString()
    uzQuestion: string;

    @ApiProperty({ description: "enQuestion" })
    @IsString()
    enQuestion: string;

    @ApiProperty({ description: "jpQuestion" })
    @IsString()
    jpQuestion: string;

    @ApiProperty({ description: "ruAnswer" })
    @IsString()
    ruAnswer: string;

    @ApiProperty({ description: "uzAnswer" })
    @IsString()
    uzAnswer: string;

    @ApiProperty({ description: "enAnswer" })
    @IsString()
    enAnswer: string;

    @ApiProperty({ description: "jpAnswer" })
    @IsString()
    jpAnswer: string;
}

export type TUpdateQuestionDto = Partial<CreateQuestionDto>