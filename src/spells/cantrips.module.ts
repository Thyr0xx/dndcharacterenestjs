import { Module } from '@nestjs/common';
import { CantripsService } from './cantrips.service';
import { CantripsController } from './cantrips.controller';

@Module({
  providers: [CantripsService],
  controllers: [CantripsController],
  exports: [CantripsService]
})
export class CantripsModule {}
