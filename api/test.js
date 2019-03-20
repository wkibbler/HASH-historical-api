var fs = require('fs');
var file = fs.readFileSync("../db/price.json", 'utf8');
var json = JSON.parse(file)
var n = parseFloat(json.March)
console.log(n + 1)
