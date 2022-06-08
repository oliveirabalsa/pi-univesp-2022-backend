import { PrismaService } from './../database/PrismaService';
import { Test, TestingModule } from '@nestjs/testing';
import { SongGameService } from './song-game.service';

describe('SongGameService', () => {
  let service: SongGameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SongGameService, PrismaService],
    }).compile();

    service = module.get<SongGameService>(SongGameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
