const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/users';

var db = () => {
  return new Promise( function (resolve, reject) {
        MongoClient.connect(url , function(err, client) {
            if(err) {  console.log(err); return reject(err); }
            resolve(client);
        });
    });
}

module.exports = {
    db
}

