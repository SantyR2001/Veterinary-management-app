const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const connection = require("./connectDB");

//Middlewares
app.use(cors());
app.use(morgan("dev"));
require("dotenv").config();
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

//Settings
app.set((PORT = process.env.PORT));

//Server start
app.listen(PORT, (req, res) => {
  console.log(`Server running on port = ${PORT}`);
});
