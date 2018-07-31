/**
 * Created by wy on 2017/12/11.
 */
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

const connect = new Promise((resolve, reject) => {
   MongoClient.connect(url, function (err, client) {
   // assert.equal(null, err);
   console.log("Connected successfully to server");
   resolve(client);
});
});
module.exports = connect;
