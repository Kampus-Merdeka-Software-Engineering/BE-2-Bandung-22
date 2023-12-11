require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { menuRoutes } = require("./routes/menu.routes");
const { transaksi_dineinRoutes } = require("./routes/transaksi_dinein.routes");
const {
  transaksi_takeawayRoutes,
} = require("./routes/transaksi_takeaway.routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("here is the response");
});

// catalog routes
app.use("/Menu", menuRoutes);

// messages routes
app.use("/DineIn", transaksi_dineinRoutes);
app.use("/TakeAway", transaksi_takeawayRoutes);
app.all("*", async (req, res) => {
  res.json({
    message: "Routes you're looking is not found",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is already running at ${PORT}`);
});
