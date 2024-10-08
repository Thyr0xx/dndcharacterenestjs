import { Injectable } from '@nestjs/common';
import { Race, RaceList } from 'src/interfaces/racesInterfaces';
import racesData from '../data/races/races.json';

@Injectable()
export class RacesService {
    private races: RaceList = racesData as RaceList;

    getAllRaces(): RaceList{
        return this.races;
    }

    getRaceById(id: string): Race | undefined{
        return this.races.find(race => race.id === id)
    }
}
