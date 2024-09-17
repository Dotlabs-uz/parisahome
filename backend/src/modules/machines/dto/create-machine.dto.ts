import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsString } from "class-validator";

export class CreateMachineDto {
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
}

export class UpdateMachineDto extends PartialType(CreateMachineDto) {}
