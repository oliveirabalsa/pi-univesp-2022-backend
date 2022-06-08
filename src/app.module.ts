import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongGameModule } from './song-game/song-game.module';

@Module({
  imports: [SongGameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
