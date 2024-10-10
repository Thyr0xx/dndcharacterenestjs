import { Type } from "class-transformer";
import { IsOptional, IsString, ValidateNested } from "class-validator";
import { TraitDto } from "src/interfaces/traits.dto";

export class SubRaceDto{
    @IsString()
    id: string

    @IsString()
    name: string

    @IsString()
    description: string

    @ValidateNested()
    @Type(()=>TraitDto)
    @IsOptional()
    traits?: TraitDto
}