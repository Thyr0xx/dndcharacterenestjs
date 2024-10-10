import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RacesModule } from './races/races.module';
import { CantripsModule } from './spells/cantrips.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterClassService } from './character-class/character-class.service';
import { CharacterClassModule } from './character-class/character-class.module';
import { CharactersModule } from './characters/characters.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(configService: ConfigService)=>({
        type:'mysql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT'),10),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities:[__dirname+ '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),      
    }),
    RacesModule, CantripsModule, CharacterClassModule, CharactersModule],
  controllers: [AppController],
  providers: [AppService, CharacterClassService],
})
export class AppModule {}
