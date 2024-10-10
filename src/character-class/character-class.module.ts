import { Module } from '@nestjs/common';
import { CharacterClassController } from './character-class.controller';

@Module({
  controllers: [CharacterClassController]
})
export class CharacterClassModule {}
