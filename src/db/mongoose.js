const mongoose = require('mongoose')
const validator = require('validator')


mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required : true,
        trim: true

    },
    age : {
        type: Number,
        min: [0, 'age must be positive'],
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cant be password')
            }
        }
    }
})



const myself = new User({
    name: 'Chad3',
    age : 13,
    email: 'andy3@gmail.com',
    password: 'somesword'
})

myself.save().then(() => {
    console.log(myself)
}).catch((error) => {
    console.log('Error!', error)
})


const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: '    Going back to nap'
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error!', error)
})



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