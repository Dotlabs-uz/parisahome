import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateQuestionDto {
    @ApiProperty({ description: "question" })
    @IsString()
    readonly question: string;

    @ApiProperty({ description: "answer" })
    @IsString()
    readonly answer: string;
}

export type TUpdateQuestionDto = Partial<CreateQuestionDto>