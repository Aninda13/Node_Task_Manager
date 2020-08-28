const mongoose = require('mongoose')
const validator = require('validator')

// Mongoose just connects to the localhost now

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    
})







// const task = new Task({
//     description: '    Going back to nap'
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })



// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed : {
//         type: Boolean
//     }
// })

// const myTask = new Task({
//     description : 'Waking up',
//     completed : false
// })

// myTask.save().then(() => {
//     console.log(myTask)
// }).catch((error) => {
//     console.log('Error!' , error)
// })