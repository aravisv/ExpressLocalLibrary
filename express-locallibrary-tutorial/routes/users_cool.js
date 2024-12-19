const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("You are so f*ing cool");
});

module.exports = router;
