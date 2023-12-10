const express = require("express");
const transaksi_takeawayRoutes = express.Router();
const { prisma } = require("../config/prisma");

//get all transaksi
transaksi_takeawayRoutes.get("/", async (req, res) => {
  const transaksi_takeaway = await prisma.transaksi_takeaway.findMany();
  res.status(200).send(transaksi_takeaway);
});

// get transaksi by idTransaksi
transaksi_takeawayRoutes.get("/:id_pesanan", async (req, res) => {
  const transaksi_takeaway = await prisma.transaksi_takeaway.findUnique({
    where: {
      idTransaksi: parseInt(req.params.id),
    },
  });
  if (!transaksi_takeaway)
    res.status(404).json({
      message: "Transaksi not found",
    });
  else res.status(200).json(transaksi_takeaway);
});

// create transaksi MASIH PERLU REVISI DATA DENGAN FE
transaksi_takeawayRoutes.post("/", async (req, res) => {
  const { name, noHp, date } = req.body;

  const newTransaksi = await prisma.transaksi_takeaway.create({
    data: {
      name: name,
      noHp: noHp,
      date: date,
    },
  });
  res.status(201).json({
    message: "transaksi created",
    data: newTransaksi,
  });
});

module.exports = { transaksi_takeawayRoutes };
