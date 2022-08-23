/*
  Warnings:

  - You are about to drop the column `user` on the `Trademark` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Trademark` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Trademark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trademark" DROP COLUMN "user",
DROP COLUMN "username",
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Server" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trademark" ADD CONSTRAINT "Trademark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
