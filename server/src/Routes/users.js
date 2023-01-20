const express = require("express");
const passport = require("passport");
const router = express.Router();
const connection = require("../connectDB");

router.post("/register", (req, res) => {
  passport.authenticate("local.signup", { failureMessage: true });
  res.send("received");
});

module.exports = router;
