var fs = require('fs');
var request = require('request');
var axios = require('axios');
module.exports = function collect(){
var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var currentMonth = month[d.getMonth()];
var file = fs.readFileSync(__dirname + '/../db/price.json', 'utf8');
var json = JSON.parse(file)
axios({
method:'get',
url:"https://api.coingecko.com/api/v3/coins/hash"}).then(function(response) {
  var n = parseFloat(response.data.market_data.current_price.usd.toFixed(8))
  json[currentMonth] = n;
  var j = JSON.stringify(json);
  fs.writeFile("../db/price.json", j, (err) => {
             if (err) throw err;
             console.log("Monthly price updated")
          });
})
}
