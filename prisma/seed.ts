import { songGameFiles } from './seeds/song-game.seed';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.songGame.deleteMany({});
  for (const songGame of songGameFiles) {
    await prisma.songGame.create({
      data: songGame,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
