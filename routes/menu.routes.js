const express = require("express");
const menuRoutes = express.Router();
const { prisma } = require("../config/prisma");

// get menu
menuRoutes.get("/menu", async (req, res) => {
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

module.exports = { menuRoutes };
