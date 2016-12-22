var connectionString, database, mongoose, options;
mongoose = require('mongoose');

var config   = require('./config/db');
var port     = config.port;
var db       = config.db;
var host     = config.host;


connectionString = 'mongodb://' + host + ':' + port + '/' + db + '';

options = {
  db: {
    native_parser: true
  },
  server: {
    auto_reconnect: true,
    poolSize: 5
  }
};

console.log(connectionString);

mongoose.connect(connectionString, options, function(err, res) {
  if (err) {
    console.log('[mongoose log] Error connecting to: ', connectionString + '. ' + err);
    return process.exit(1);
  } else {
    return console.log('[mongoose log] Successfully connected to: ', connectionString);
  }
});

database = mongoose.connection;

database.on('error', console.error.bind(console, 'mongoose connection error:'));

database.once('open', function() {
  return console.log('mongoose open success');
});


module.exports = database;