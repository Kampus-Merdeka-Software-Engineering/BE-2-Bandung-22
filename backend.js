// const data = "testing";
// console.log(data);

const express = require("express"); //require berfungsi untuk mengambil modul express dari modul yg tersedia
const app = express();
const port = 3000; //dijalankan di port 3000 atau bebas

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/hello", (req, res) => {
  res.send("yang ke 2");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
