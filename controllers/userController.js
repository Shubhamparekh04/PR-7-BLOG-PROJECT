const blogModule = require("../models/userModel");

module.exports.homePage = (req, res) => {
  res.render("index");
};

module.exports.addBlogPage = (req, res) => {
  res.render("form");
};

module.exports.addBlog = async (req, res) => {
  console.log(req.body, req.file);
  try {
    await blogModule.create({ ...req.body, image: req.file.path });
    console.log("Blog Data created...!");
    res.redirect("../form");
  } catch (error) {
    console.log(error.message);
    res.redirect("../form");
  }
};
