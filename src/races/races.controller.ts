import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { RacesService } from './races.service';
import { Race, RaceList } from 'src/interfaces/racesInterfaces';

@Controller('races')
export class RacesController {
    constructor(private readonly racesService: RacesService){}

    @Get()
    getAllRaces():RaceList{
        return this.racesService.getAllRaces()
    }

    @Get(":id")
    getRaceById(@Param('id')id: string):Race{
        const race = this.racesService.getRaceById(id)
        if(!race){
            throw new NotFoundException(`Race with ID "${id}" not found`)
        }
        return race
    }
}
