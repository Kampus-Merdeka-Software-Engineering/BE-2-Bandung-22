-- CreateTable
CREATE TABLE `Menu` (
    `idMenu` INTEGER NOT NULL AUTO_INCREMENT,
    `namaMenu` VARCHAR(191) NOT NULL,
    `harga` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idMenu`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Menu_Transaksi` (
    `idMenu` INTEGER NOT NULL AUTO_INCREMENT,
    `idTransaksi` VARCHAR(191) NOT NULL,
    `totalHarga` INTEGER NOT NULL,

    PRIMARY KEY (`idMenu`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaksi` (
    `idTransaksi` INTEGER NOT NULL AUTO_INCREMENT,
    `namPemesan` VARCHAR(191) NOT NULL,
    `noHp` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `totalHarga` INTEGER NOT NULL,

    PRIMARY KEY (`idTransaksi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
