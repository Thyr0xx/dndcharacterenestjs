// src/characters/characters.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './entities/character.entitty';
import { CreateCharacterDto } from './dtos/createCharacter.dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
  ) {}

  create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const character = this.charactersRepository.create(createCharacterDto);
    return this.charactersRepository.save(character);
  }

  findAll(): Promise<Character[]> {
    return this.charactersRepository.find({ relations: ['race'] });
  }

  findOne(id: string): Promise<Character> {
    return this.charactersRepository.findOne({ where: { id }, relations: ['race'] });
  }
}
