const { Tour } = require("../../models/tour.models");

module.exports.list = async (req, res) => {
  const tourList = await Tour.find({});

  res.render("client/pages/tour-list", {
    pageTitle: "Trang danh sách tours",
    tourList: tourList,
  });
};
