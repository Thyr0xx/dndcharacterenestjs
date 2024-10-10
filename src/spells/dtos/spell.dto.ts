import { Type } from "class-transformer";
import { isArray, IsArray, IsEnum, IsNumber, IsOptional, isString, IsString, ValidateNested } from "class-validator";

enum School{
    Abjuration = 'abjuration',
    Conjuration = 'conjuration',
    Divination = 'divination',
    Enchantment = 'enchantment',
    Evocation = 'evocation',
    Illusion = 'illusion',
    Necromancy = 'necromancy',
    Transmutation = 'transmutation'
}

enum CastingTime{
    OneAction = "oneAction",
    BonusAction = "bonusAction",
    Reaction = "reaction"
}

enum Duration{
    Instantaneous = 'instantaneous',
    OneRound = 'oneRound',
    TenRound = 'tenRound',
    UntilLongRest = 'untilLongRest',
    Permanent = 'permanent',
    Concentration = 'concentration',
}

class RangeDto{
    @IsNumber()
    distance: number

    @IsString()
    unit: string
}

class ScalingDto{
    @IsArray()
    @IsNumber({},{each: true})
    level: number[]

    @IsArray()
    @IsString({each: true})
    effect: string[]
}

class DamageDto {
    @IsString()
    type: string;
  
    @IsString()
    dice: string;
}

export class SpellDto{
    @IsString()
    id: string

    @IsString()
    name: string

    @IsString()
    description: string

    @IsEnum(School)
    school:School

    @IsEnum(CastingTime)
    castingTime: CastingTime

    @ValidateNested()
    @Type(()=>RangeDto)
    range: RangeDto

    @IsEnum(Duration)
    duration: Duration

    @ValidateNested()
    @Type(()=>DamageDto)
    @IsOptional()
    damage?:DamageDto

    @ValidateNested()
    @Type(()=> ScalingDto)
    @IsOptional()
    scaling?: ScalingDto

    @IsArray()
    @IsString({each: true})
    classes: string[]

    @IsArray()
    @IsString({each: true})
    @IsOptional()
    tags?: string[]
}