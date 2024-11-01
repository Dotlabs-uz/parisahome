import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateMachineDto {
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
}

export class UpdateMachineDto extends PartialType(CreateMachineDto) { }
