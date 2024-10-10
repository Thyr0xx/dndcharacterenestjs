import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { RacesModule } from 'src/races/races.module';
import { Character } from './entities/character.entity';
import { CantripsModule } from 'src/spells/cantrips.module';
//import { CharacterClassModule } from 'src/character-class/character-class.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Character]),
    RacesModule,
    CantripsModule
    //CharacterClassModule
  ],
  controllers: [CharactersController],
  providers: [CharactersService],
})
export class CharactersModule {}
