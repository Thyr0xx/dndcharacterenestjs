import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RacesModule } from './races/races.module';
import { CantripsModule } from './cantrips/cantrips.module';

@Module({
  imports: [RacesModule, CantripsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
