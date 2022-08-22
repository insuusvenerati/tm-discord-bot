/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Trademark` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phrase]` on the table `Trademark` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Trademark_name_key" ON "Trademark"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Trademark_phrase_key" ON "Trademark"("phrase");
