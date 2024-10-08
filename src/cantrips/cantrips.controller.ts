import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CantripsService } from './cantrips.service';
import { get } from 'http';
import { Spell } from 'src/interfaces/spellInterfaces';

@Controller('cantrips')
export class CantripsController {
    constructor(private readonly cantripsService: CantripsService){}

    @Get()
    getAllCantrips():Spell[]{
        return this.cantripsService.getAllCantrips()
    }

    @Get(":id")
    getCantripsById(@Param('id')id:string): Spell{
        const spell = this.cantripsService.getCantripsById(id)
        if(!spell){
            throw new NotFoundException(`Spell with ID "${id}" not found`)
        }
        return spell
    }
}
