const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource"); //sends whatever is here as the response
  //res.render("index", { title: "Users page using index template" });
});

/* 
router.get("/cool", (req, res, next) => {
  res.send("you are cool - (from the same users router)");
}); 
*/

module.exports = router;
