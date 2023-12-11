const express = require("express");
const transaksi_dineinRoutes = express.Router();
const { prisma } = require("../config/prisma");

//get all transaksi
transaksi_dineinRoutes.get("/", async (req, res) => {
  const dinein = await prisma.dinein.findMany();
  res.status(200).send(dinein);
});

// get transaksi by idTransaksi
transaksi_dineinRoutes.get("/:id_pesanan", async (req, res) => {
  const dinein = await prisma.dinein.findUnique({
    where: {
      idTransaksi: parseInt(req.params.idTransaksi),
    },
  });
  if (!dinein)
    res.status(404).json({
      message: "Transaksi not found",
    });
  else {
    res.status(200).json(dinein);
  }
});

// menuRoutes.get("/:idtransaksi", async (req, res) => {
//   try {
//     const idtransaksi = await prisma.dinein.findUnique({
//       where: {
//         idtransaksi: parseInt(req.params.idtransaksi),
//       },
//     });

//     if (!idtransaksi) {
//       res.status(404).json({
//         message: "Menu not found",
//       });
//     } else {
//       res.status(200).json(idtransaksi);
//     }
//   } catch (error) {
//     console.error("Error fetching Transaksi:", error);
//     res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// });

// create transaksi
// transaksi_dineinRoutes.post("/", async (req, res) => {
//   const { noTabel, name, noHp } = req.body;

//   const newTransaksi = await prisma.newTransaksi.create({
//     data: {
//       name: name,
//       noTabel: noTabel,
//       noHp: noHp,
//     },
//   });
//   res.status(201).json({
//     message: "transaksi created",
//     data: newTransaksi,
//   });
// });

transaksi_dineinRoutes.post("/", async (req, res) => {
  try {
    const { noTabel, name, noHp } = req.body;

    // Validasi input
    if (!noTabel || !name || !noHp) {
      return res.status(400).json({
        message: "Invalid input. All fields are required.",
      });
    }

    const newTransaksi = await prisma.transaksi_dinein.create({
      data: {
        name: name,
        noTabel: noTabel,
        noHp: noHp,
      },
    });

    res.status(201).json({
      message: "Transaksi created",
      data: newTransaksi,
    });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = { transaksi_dineinRoutes };
