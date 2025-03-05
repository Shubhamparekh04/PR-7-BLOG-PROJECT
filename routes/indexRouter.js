const { Router } = require("express");

const indexRouter = Router();

const userRoutes = require("./userRoutes");

indexRouter.use("/", userRoutes);

module.exports = indexRouter;
