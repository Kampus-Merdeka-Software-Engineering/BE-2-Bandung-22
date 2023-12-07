const express = require("express");
const transaksiRoutes = express.Router();
const { prisma } = require("../config/prisma");

//get all transaksi
transaksiRoutes.get("/", async (req, res) => {
  const transaksi = await prisma.transaksi.findMany();
  res.status(200).send(transaksi);
});

// get transaksi by idTransaksi
transaksiRoutes.get("/:idTransaksi", async (req, res) => {
  const transaksi = await prisma.transaksi.findUnique({
    where: {
      idTransaksi: parseInt(req.params.id),
    },
  });
  if (!transaksi)
    res.status(404).json({
      message: "Transaksi not found",
    });
  else res.status(200).json(transaksi);
});

// create transaksi
transaksiRoutes.post("/", async (req, res) => {
  const { name } = req.body;
  // todo - handle if name is not passed in
  // if (!name) res.status(400).json({ message: "Name is required" });
  const newCatalog = await prisma.transaksi.create({
    data: {
      name: name,
    },
  });
  res.status(201).json({
    message: "transaksi created",
    data: newTransaksi,
  });
});
