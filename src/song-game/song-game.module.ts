import { PrismaService } from './../database/PrismaService';
import { Module } from '@nestjs/common';
import { SongGameService } from './song-game.service';
import { SongGameController } from './song-game.controller';

@Module({
  controllers: [SongGameController],
  providers: [SongGameService, PrismaService],
})
export class SongGameModule {}
