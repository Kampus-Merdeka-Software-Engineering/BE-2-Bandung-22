// require('dotenv').config()

// const { error } = require("console");
// const express = require("express"); //require berfungsi untuk mengambil modul express dari modul yg tersedia
// const app = express();
// const port = 3000; //dijalankan di port 3000 atau bebas
// const fs = require("fs");

// require('dotenv').config()
// // app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// // const cors = require("cors");

// // Server.use(cors());
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/hello", (req, res) => {
//   res.send("yang ke 2");
// });

// app.get("/products", (req, res) => {
//   fs.readFile("./products.json", (error, data) => {
//     if (error) res.send("Gagal dalam pembacaan data");
//     const products = JSON.parse(data);
//     res.status(200).send(products);
//   });
// });

// app.get("/products/:id", (req, res) => {
//   const { id } = req.params;

//   fs.readFile("./products.json", (error, data) => {
//     if (error) res.send("Gagal dalam pembacaan data");
//     const products = JSON.parse(data);
//     const product = products.find((product) => product.id === parseInt(id));
//     if (!product) {
//       res.status(404).send("Product not found");
//     }
//     res.status(200).send(product);
//   });
// });

// //bikin get baru sama app.post

// app.post("/products", (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });

// app.all("*", (req, res) => {
//   res.status(404).send("404 routes not found");
// });

// app.listen(port, () => {
//   console.log(`udah jalan di http://localhost:${port}`);
// });

// // Server.use(cors());

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { menuRoutes } = require("./routes/menu.routes");
const { menu_transaksiRoutes } = require("./routes/menu_transaksi.routes");
const { transaksiRoutes } = require("./routes/transaksi.routes");
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

// products routes
app.use("/Menu-Transaksi", menu_transaksiRoutes);

// messages routes
app.use("/Transaksi", transaksiRoutes);

app.all("*", async (req, res) => {
  res.json({
    message: "Routes you're looking is not found",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is already running at ${PORT}`);
});
