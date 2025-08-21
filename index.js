const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { Tour } = require("./models/tour.models.js");
require("dotenv").config();
const app = express();
const port = 3000;

//Kết nối CSDL
mongoose.connect(process.env.DATABASE);

//Thiết lập thư mục chứa code giao diện
app.set("views", path.join(__dirname, "views"));

//Thiết lập template engine
app.set("view engine", "pug");

//Thiết lập thư mục chứa file tĩnh
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("client/pages/home.pug", {
    pageTitle: "Trang chủ",
  });
});

app.get("/tours", async (req, res) => {
  const tourList = await Tour.find({});

  res.render("client/pages/tour-list", {
    pageTitle: "Trang danh sách tours",
    tourList: tourList,
  });
});

app.listen(port, () => {
  console.log(`Website đang chạy tại cổng ${port}`);
});
