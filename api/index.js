var server = require('./server');
var collect = require('./collect');
var cron = require('node-cron');
server()
cron.schedule('*/1 * * * *', () => {
  collect()
});
