const express = require("express");
const menuRoutes = express.Router();
const { prisma } = require("../config/prisma");

// get menu
menuRoutes.get("/menu", async (req, res) => {
  const menu = await prisma.menu.findMany();
  res.status(200).send(menu);
});

//get menu berdasarkan idMenu
menuRoutes.get("/:idMenu", async (req, res) => {
  try {
    const idMenu = await prisma.idMenu.findUnique({
      where: {
        idMenu: parseInt(req.params.idMenu),
      },
    });

    if (!idMenu) {
      res.status(404).json({
        message: "Menu not found",
      });
    } else {
      res.status(200).json(idMenu);
    }
  } catch (error) {
    console.error("Error fetching menu:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// menuRoutes.post("/createmenu", async (req, res) => {
//   const { name, harga, deskripsi, stock, photo } = req.body;

//   const newMenu = await prisma.menu.create({
//     data: {
//       name: name,
//       harga: harga,
//       deskripsi: deskripsi,
//       stock: stock,
//       photo: photo,
//     },
//   });
//   res.status(201).json({
//     message: "Menu created",
//     data: newMenu,
//   });
// });

module.exports = { menuRoutes };
