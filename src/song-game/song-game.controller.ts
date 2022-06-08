import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SongGameService } from './song-game.service';
import { CreateSongGameDto } from './dto/create-song-game.dto';

@Controller('song-game')
export class SongGameController {
  constructor(private readonly songGameService: SongGameService) {}

  @Post()
  create(@Body() createSongGameDto: CreateSongGameDto) {
    return this.songGameService.create(createSongGameDto);
  }

  @Get()
  async findAll() {
    return this.songGameService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.songGameService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.songGameService.remove(id);
  }
}
