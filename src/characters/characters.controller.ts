import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CharactersService } from "./characters.service";
import { CreateCharacterDto } from "./dtos/createCharacter.dto";
import { Character } from "./entities/character.entity";

@Controller('characters')
export class CharactersController{
    constructor (private readonly charactersService: CharactersService){}

    @Post()
    async create (@Body() createCharacterDto: CreateCharacterDto): Promise<Character>{
    return this.charactersService.create(createCharacterDto)
    }

    @Get()
    findAll(): Promise<Character[]>{
        return this.charactersService.findAll()
    }

    @Get(':id')
    findOne(@Param('id')id: string):Promise<Character>{
        return this.charactersService.findOne(id)
    }
    
    @Get(':id/details')
    async findOneWithDetails(@Param('id')id:string): Promise<any>{
        return this.charactersService.findOneWithDetails(id)
    }
}