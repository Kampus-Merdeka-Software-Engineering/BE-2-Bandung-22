/*
  Warnings:

  - You are about to alter the column `harga` on the `menu` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the `menu_transaksi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transaksi` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `menu` MODIFY `harga` INTEGER NOT NULL;

-- DropTable
DROP TABLE `menu_transaksi`;

-- DropTable
DROP TABLE `transaksi`;

-- CreateTable
CREATE TABLE `TakeAway` (
    `idTransaksi` INTEGER NOT NULL AUTO_INCREMENT,
    `namPemesan` VARCHAR(191) NOT NULL,
    `noHp` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `totalHarga` INTEGER NOT NULL,

    PRIMARY KEY (`idTransaksi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dinein` (
    `idTransaksi` INTEGER NOT NULL AUTO_INCREMENT,
    `namPemesan` VARCHAR(191) NOT NULL,
    `noHp` VARCHAR(191) NOT NULL,
    `noMeja` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idTransaksi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
