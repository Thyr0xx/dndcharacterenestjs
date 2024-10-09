// src/characters/characters.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { Character } from './entities/character.entitty';
import { Race } from '../races/entities/race.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Character, Race])],
  controllers: [CharactersController],
  providers: [CharactersService],
})
export class CharactersModule {}
