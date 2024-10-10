import { Injectable } from '@nestjs/common';
import { Spell } from 'src/interfaces/spellInterfaces';
import cantripsData from 'src/data/spells/level0.json'

@Injectable()
export class CantripsService {
    private cantrips: Spell[] = cantripsData['0'] as Spell[]

    getAllCantrips():Spell[]{
        return this.cantrips
    }

    getCantripsById(id:string):Spell | undefined{
        return this.cantrips.find(cantrip => cantrip.id === id)
    }
}

