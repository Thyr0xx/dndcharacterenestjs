import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCharacterDto{
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    raceId: string;
  
    @IsString()
    @IsOptional()
    subRaceId?: string;

    @IsNumber()
    @IsNotEmpty()
    level:number

    // @IsArray()
    // @IsNotEmpty()
    // @IsString({each: true})
    // @ArrayMinSize(1,{message:'The character must have at least one class. '})
    // classIds: string[]
  
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    spellIds?: string[];
}