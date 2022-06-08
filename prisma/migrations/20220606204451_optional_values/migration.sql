-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_song_game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "letter" TEXT NOT NULL,
    "firstObjectName" TEXT NOT NULL,
    "secondObjectName" TEXT,
    "thirdObjectName" TEXT
);
INSERT INTO "new_song_game" ("firstObjectName", "id", "letter", "secondObjectName", "thirdObjectName") SELECT "firstObjectName", "id", "letter", "secondObjectName", "thirdObjectName" FROM "song_game";
DROP TABLE "song_game";
ALTER TABLE "new_song_game" RENAME TO "song_game";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
