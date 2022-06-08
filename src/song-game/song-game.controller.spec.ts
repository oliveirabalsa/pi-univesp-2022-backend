import { SongGameOutput } from './interfaces/SongGameOutput.interface';
import { PrismaService } from './../database/PrismaService';
import { Test, TestingModule } from '@nestjs/testing';
import { SongGameController } from './song-game.controller';
import { SongGameService } from './song-game.service';
import { CreateSongGameDto } from './dto/create-song-game.dto';

describe('SongGameController', () => {
  let controller: SongGameController;
  let service: SongGameService;
  let mockDataIn: CreateSongGameDto;
  let mockDataOut: SongGameOutput;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SongGameController],
      providers: [SongGameService, PrismaService],
    }).compile();

    controller = module.get<SongGameController>(SongGameController);
    service = module.get<SongGameService>(SongGameService);
    mockDataIn = {
      letter: 'string',
      firstObjectName: 'string',
      secondObjectName: 'string',
      thirdObjectName: 'string',
    };
    mockDataOut = {
      id: '4f2a8208-e52a-45b8-9c1d-dccfca356497',
      letter: 'string',
      firstObjectName: 'string',
      secondObjectName: 'string',
      thirdObjectName: 'string',
    };
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call songGameService with create method', async () => {
    jest.spyOn(service, 'create').mockResolvedValue(mockDataOut);
    await controller.create(mockDataIn);
    expect(service.create).toBeCalledWith(mockDataIn);
  });

  it('should call songGameService with findAll method', async () => {
    jest.spyOn(service, 'findAll').mockResolvedValue([mockDataOut]);
    await controller.findAll();
    expect(service.findAll).toBeCalled();
  });

  it('should call songGameService with findOne method', async () => {
    const id = '4f2a8208-e52a-45b8-9c1d-dccfca356497';
    jest.spyOn(service, 'findOne').mockResolvedValue(mockDataOut);
    await controller.findOne(id);
    expect(service.findOne).toBeCalled();
  });

  it('should call songGameService with remove method', async () => {
    const id = '4f2a8208-e52a-45b8-9c1d-dccfca356497';
    jest.spyOn(service, 'remove').mockResolvedValue(mockDataOut);
    await controller.remove(id);
    expect(service.remove).toBeCalled();
  });
});
