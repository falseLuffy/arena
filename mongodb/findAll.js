/**
 * Created by wy on 2017/12/11.
 */
const connect = require('./connect');
const assert = require('assert');

const dbName = 'myproject';

const findAll = function () {
   return connect.then((client) => {

      return findDocuments(client).then((docs) => {
         // client.close();
         return docs;
})
});
}
module.exports = findAll;
// export default findAll;
const findDocuments = function (client) {
   const db = client.db(dbName);
   return new Promise((resolve, reject) => {
      // Get the documents collection
      const collection = db.collection('documents');
   // Find some documents
   collection.find({}).toArray(function (err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      // console.log(docs);
      // client.close();
      resolve(docs);
   });
})
}
