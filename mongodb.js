// curd : create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient; // provies functions necessary
// const ObjectID = mongodb.ObjectID;
// Shorthand syntax and doing thise two things using destructuring
const {MongoClient , ObjectID, ResumeToken } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';



MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if(error){
        console.log('Unable to connect to the Database')
    }

   const db =  client.db(databaseName)

   db.collection('users').insertOne({
       name: 'Aninda',
       age : 24
   })
   
})



