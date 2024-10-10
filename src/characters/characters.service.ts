// src/characters/characters.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './entities/character.entity';
import { CreateCharacterDto } from './dtos/createCharacter.dto';
import { RacesService } from 'src/races/races.service';
import { CantripsService } from 'src/spells/cantrips.service';


@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private readonly charactersRepository: Repository<Character>,
    private readonly racesService: RacesService,
    private readonly cantripsService: CantripsService,
    //private readonly characterClassService: CharacterClassService,
  ) {}

  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const {
      name,
      raceId,
      subRaceId,
      level,
      spellIds,
      //classIds
    } = createCharacterDto

    //validation races
    const race = this.racesService.getRaceById(raceId)
    if(!race){
      throw new NotFoundException(`Race with ID '${raceId}' not found`)
    }

    //validation subraces if exist
    if(subRaceId){
      const subRace = race.subRaces.find((sr)=>sr.id === subRaceId)
      if(!subRace){
        throw new NotFoundException(`Subrace with ID '${subRaceId}' not found`)
      }
    }

    //validation player character class
    /*
    if(classIds && classIds.length > 0){
      for(const classId of classIds){
        const characterClass = this.characterClassService.getClassById(classId)
        if(!characterClass){
          throw new NotFoundException(`Class with ID '${classId}' not found`)
        }
      }
    }
     */
    //validation spell 
    if(spellIds && spellIds.length > 0){
      for(const spellId of spellIds){
        const spell = this.cantripsService.getCantripsById(spellId)
        if(!spell){
          throw new NotFoundException(`Spell with ID '${spellId}' not found`)
        }
      }
    }

    const character = this.charactersRepository.create({
      name,
      raceId,
      subRaceId,
      level,
      spellIds,
      //classIds
    })

    return this.charactersRepository.save(character)
  }

  findAll(): Promise<Character[]> {
    return this.charactersRepository.find();
  }

  async findOne(id: string): Promise<Character> {
    const character = await this.charactersRepository.findOne({ where: { id }});
    if(!character){
      throw new NotFoundException(`character with ID '${id}' not found`)
    }
    return character
  }

  async findOneWithDetails(id: string): Promise<any>{
    const character = await this.findOne(id)

    // load race details
    const race = this.racesService.getRaceById(character.raceId)

    //load subrace details
    let subRace = null
    if(character.subRaceId){
      subRace = race?.subRaces?.find((sr)=>sr.id === character.subRaceId)
    }

    //load character class details
    /*
    let classes = []
    if (character.classIds && character.classIds.length > 0){
      classes = character.classIds.map((classId) => this.characterClassService.getClassById(classId))
    }
    */
    let spells = []
    if(character.spellIds && character.spellIds.length > 0){
      spells = character.spellIds.map((spellId)=> this.cantripsService.getCantripsById(spellId))
    }

    return {
      ...character,
      race,
      subRace,
      //class : characterClass
      spells
    }
  }
}
