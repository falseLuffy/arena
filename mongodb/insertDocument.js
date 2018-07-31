/**
 * Created by wy on 2017/12/11.
 */
const connect = require('./connect');
const assert = require('assert');

const dbName = 'myproject';

const insetData = function (data) {
   return connect.then((client) => {

      return insertDocuments(client,data).then((result)=>{

         return result;
      })
   });
}
module.exports = insetData;

const insertDocuments = function (client,data) {
   const db = client.db(dbName);
   return new Promise((resolve)=>{
      // Get the documents collection
      const collection = db.collection('documents');
      // Insert some documents
      collection.insertMany([
         data
      ], function (err, result) {
         // client.close();
         /*assert.equal(err, null);
         assert.equal(1, result.result.n);
         assert.equal(1, result.ops.length);*/
         console.log("Inserted 1 documents into the collection");
         resolve(result);
      });
   })
};