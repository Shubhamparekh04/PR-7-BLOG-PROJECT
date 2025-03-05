const express = require("express");
const indexRouter = require("./routes/indexRouter");
const upload = require("./middleware/imageUpload");
const db = require("./configs/database");
const blogModule = require("./models/userModel");
const port = 8088;

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(port, (err) => {
  db();
  if (!err) {
    console.log("server runs on\nhttp://localhost:" + port);
  }
});
