import { Test, TestingModule } from '@nestjs/testing';
import { CantripsController } from './cantrips.controller';

describe('CantripsController', () => {
  let controller: CantripsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CantripsController],
    }).compile();

    controller = module.get<CantripsController>(CantripsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
