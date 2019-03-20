var express = require("express");
var fs = require('fs');
var app = express();
module.exports = function startServer(){
app.listen(3000, () => {
 console.log("Server running on port 3000");
})
app.get("/price/", (req, res, next) => {
  var file = fs.readFileSync("../db/price.json", 'utf8');
  res.json(JSON.parse(file))
})
}
