const { error } = require("console");
const express = require("express"); //require berfungsi untuk mengambil modul express dari modul yg tersedia
const app = express();
const port = 3000; //dijalankan di port 3000 atau bebas
const fs = require("fs");
// const cors = require("cors");

// Server.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/hello", (req, res) => {
  res.send("yang ke 2");
});

app.get("/products", (req, res) => {
  fs.readFile("./products.json", (error, data) => {
    if (error) res.send("Gagal dalam pembacaan data");
    const products = JSON.parse(data);
    res.status(200).send(products);
  });
});

//bikin get baru sama app.post

app.all("*", (req, res) => {
  res.status(404).send("404 routes not found");
});

app.listen(port, () => {
  console.log(`udah jalan di http://localhost:${port}`);
});

// Server.use(cors());
