const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const homeController = require("./controllers/client/home.controller.js");
const tourController = require("./controllers/client/tour.controller.js");
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

app.get("/", homeController.home);

app.get("/tours", tourController.list);

app.listen(port, () => {
  console.log(`Website đang chạy tại cổng ${port}`);
});
