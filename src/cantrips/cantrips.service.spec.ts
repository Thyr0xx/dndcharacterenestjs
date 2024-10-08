import { Test, TestingModule } from '@nestjs/testing';
import { CantripsService } from './cantrips.service';

describe('CantripsService', () => {
  let service: CantripsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CantripsService],
    }).compile();

    service = module.get<CantripsService>(CantripsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
