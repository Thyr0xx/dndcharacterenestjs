import { Controller, Get, Post } from "@nestjs/common";
import { CharactersService } from "./characters.service";

@Controller('characters')
export class CharactersController{
    constructor (private readonly charactersService: CharactersService){}

}