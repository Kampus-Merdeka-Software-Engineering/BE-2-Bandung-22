const { error } = require("console");
const express = require("express"); //require berfungsi untuk mengambil modul express dari modul yg tersedia
const app = express();
const port = 3000; //dijalankan di port 3000 atau bebas
const fs = require("fs");
// app.use(cors());
app.use(express.urlencoded({ extended: true }));
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

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  fs.readFile("./products.json", (error, data) => {
    if (error) res.send("Gagal dalam pembacaan data");
    const products = JSON.parse(data);
    const product = products.find((product) => product.id === parseInt(id));
    if (!product) {
      res.status(404).send("Product not found");
    }
    res.status(200).send(product);
  });
});

//bikin get baru sama app.post

app.post("/products", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.all("*", (req, res) => {
  res.status(404).send("404 routes not found");
});

app.listen(port, () => {
  console.log(`udah jalan di http://localhost:${port}`);
});

// Server.use(cors());
