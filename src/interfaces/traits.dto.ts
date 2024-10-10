import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

class MasteryTraitDto{
    @IsArray()
    @IsString({each: true})
    masteries: string[]
}

class NightVisionTraitDto{
    @IsNumber()
    nightVision: number

    @IsNumber()
    @IsOptional()
    superiorNightVision?: number
}

class AdvantageTraitDto{
    @IsArray()
    @ValidateNested({each: true})
    @Type(()=>AdvantageTraitDto)
    advantage: AdvantageTraitDto[]
}

class ResistanceDto{
    @IsString()
    type: string

    @IsNumber()
    reduction: number
}

class ResistanceTraitDto{
    @IsArray()
    @ValidateNested({each: true})
    @Type(()=> ResistanceDto)
    resistance : ResistanceDto[]
}

class SpellTraitDto{
    @IsOptional()
    spells?: {
        [level: string]: string[]
    }
}

export class TraitDto{
    @ValidateNested()
    @Type(()=>MasteryTraitDto)
    @IsOptional()
    masteryTrait?: MasteryTraitDto

    @ValidateNested()
    @Type(()=>NightVisionTraitDto)
    @IsOptional()
    nightVisionTrait: NightVisionTraitDto

    @ValidateNested()
    @Type(()=>AdvantageTraitDto)
    @IsOptional()
    advantageTrait?: AdvantageTraitDto

    @ValidateNested()
    @Type(()=>ResistanceTraitDto)
    @IsOptional()
    resistanceTrait?: ResistanceTraitDto 


    @ValidateNested()
    @Type(()=>SpellTraitDto)
    @IsOptional()
    spellTrait?: SpellTraitDto

    @IsBoolean()
    @IsOptional()
    immunityMagicSleep?: boolean

    @IsNumber()
    @IsOptional()
    bonusMove?: number

    @IsBoolean()
    @IsOptional()
    additionalSkill?: boolean
}

