// curd : create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient; // provies functions necessary
// const ObjectID = mongodb.ObjectID;
// Shorthand syntax and doing thise two things using destructuring
const {MongoClient , ObjectID, ResumeToken } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID()

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to the Database')
    }

    // console.log("Connected Correctly!")
   const db =  client.db(databaseName)
   console.log(id)
   console.log(id.getTimestamp())

   db.collection('users').insertOne({
       _id : id,
       name: 'Mahmudul',
       age : 24
   }, (error ,result) => {
        if(error){
            return console.log("Unable to insert user.")
        }
        console.log(result.ops)
   })
   
    // db.collection('users').insertMany([
    //     {
    //         name: 'King Svedson',
    //         age : 28
    //     },
    //     {
    //         name: 'Naepoleon',
    //         age : 48
    //     },
    //     {
    //         name: 'Regi',
    //         age : 23
    //     } 
    // ], (error, result) => {
    //     if(error){
    //         return console.log("Failed to insert many users")
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: "Physics Class",
    //         completed: true
    //     }, 
    //     {
    //         description: "LeetCode",
    //         completed: true
    //     },
    //     {
    //         description: "Eat Dinner",
    //         completed: false
    //     }

    // ],(error, result) => {
    //     if (error){
    //         console.log("Error while inserting tasks")
    //     }
    //     console.log(result.ops)
    // })






})



