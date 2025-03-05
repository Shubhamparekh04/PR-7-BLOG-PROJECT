const { Router } = require("express");
const userRouter = Router();
const userController = require("../controllers/userController");
const upload = require("../middleware/imageUpload");

userRouter.get("/", userController.homePage);
userRouter.get("/form", userController.addBlogPage);
userRouter.post("/addBlog", upload, userController.addBlog);

module.exports = userRouter;
