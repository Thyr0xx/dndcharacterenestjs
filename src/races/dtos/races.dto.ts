import { Type } from "class-transformer";
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { TraitDto } from "src/interfaces/traits.dto";
import { SubRaceDto } from "./subrace.dto";

export class RaceDto{
    @IsString()
    id: string;

    @IsString()
    name: string

    @IsString()
    description: string

    @IsNumber()
    move: number

    @ValidateNested()
    @Type(()=>TraitDto)
    @IsOptional()
    traits?:TraitDto

    @IsArray()
    @ValidateNested({each: true})
    @Type(()=> SubRaceDto)
    @IsOptional()
    subRaces?: SubRaceDto[]
}