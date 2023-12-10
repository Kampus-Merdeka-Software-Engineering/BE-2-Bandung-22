const express = require("express");
const transaksi_dineinRoutes = express.Router();
const { prisma } = require("../config/prisma");

//get all transaksi
transaksi_dineinRoutes.get("/", async (req, res) => {
  const transaksi_dinein = await prisma.transaksi_dinein.findMany();
  res.status(200).send(transaksi_dinein);
});

// get transaksi by idTransaksi
transaksi_dineinRoutes.get("/:id_pesanan", async (req, res) => {
  const transaksi_dinein = await prisma.transaksi_dinein.findUnique({
    where: {
      idTransaksi: parseInt(req.params.id),
    },
  });
  if (!transaksi_dinein)
    res.status(404).json({
      message: "Transaksi not found",
    });
  else res.status(200).json(transaksi_dinein);
});

// create transaksi
transaksi_dineinRoutes.post("/", async (req, res) => {
  const { noTabel, name, noHp } = req.body;

  const newTransaksi = await prisma.transaksi_dinein.create({
    data: {
      name: name,
      noTabel: noTabel,
      noHp: noHp,
    },
  });
  res.status(201).json({
    message: "transaksi created",
    data: newTransaksi,
  });
});

module.exports = { transaksi_dineinRoutes };
