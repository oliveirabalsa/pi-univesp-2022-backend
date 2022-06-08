import { PrismaService } from './../database/PrismaService';
import { Injectable } from '@nestjs/common';
import { CreateSongGameDto } from './dto/create-song-game.dto';

@Injectable()
export class SongGameService {
  constructor(private prismaService: PrismaService) {}

  async create(createSongGameDto: CreateSongGameDto) {
    return this.prismaService.songGame.create({ data: createSongGameDto });
  }

  async findAll() {
    return this.prismaService.songGame.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.songGame.findUnique({ where: { id } });
  }

  async remove(id: string) {
    return this.prismaService.songGame.delete({ where: { id } });
  }
}
