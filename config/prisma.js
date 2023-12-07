const { prismaClient } = require("@prisma/client");
prisma = new prismaClient();
module.exports = { prisma };
