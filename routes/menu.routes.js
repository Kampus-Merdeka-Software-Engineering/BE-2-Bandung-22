const express = require("express");
const menutRoutes = express.Router();
const { prisma } = require("../config/prisma.js");

// get menu
menuRoutes.get("/", async (req, res) => {
  const menu = await prisma.menu.findMany();
  res.status(200).send(menu);
});

//get menu berdasarkan idMenu
menuRoutes.get("/:id", async (req, res) => {
  const menu = await prisma.menu.findUnique({
    where: {
      idMenu: parseInt(req.params.idMenu),
    },
  });
  if (!menu)
    res.status(404).json({
      message: "Menu not Found",
    });
  else res.status(200).json(menu);
});

//create menu
menuRoutesoutes.post("/", async (req, res) => {
  const { namaMenu } = req.body;
  // todo - handle if name is not passed in
  // if (!name) res.status(400).json({ message: "Name is required" });
  const newMenu = await prisma.menu.create({
    data: {
      namaMenu: namaMenu,
    },
  });
  res.status(201).json({
    message: "Menu created",
    data: newMenu,
  });
});

//update menu

menuRoutesRoutes.put("/:id", async (req, res) => {
  const { idMenu } = req.params;
  const { namaMenu } = req.body;
  const updateMenu = await prisma.menu.update({
    where: { id: parseInt(id) },
    data: { namaMenu: namaMenu },
  });
  res.status(200).json({
    message: `menu with idMenu: ${id} is updated`,
    data: updatedMenu,
  });
});

// delete Menu
menuRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.menu.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.status(200).json({
    message: `menu with idMenu: ${id} successfully deleted`,
  });
});

module.exports = { menuRoutes };
