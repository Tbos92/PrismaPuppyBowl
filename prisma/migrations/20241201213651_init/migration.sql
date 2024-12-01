-- CreateEnum
CREATE TYPE "Benched" AS ENUM ('Field', 'Bench');

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "status" "Benched" NOT NULL DEFAULT 'Bench',

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);
