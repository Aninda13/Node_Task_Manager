const mongoose = require('mongoose')
const validator = require('validator')
var Schema = mongoose.Schema

// const userSchema = new Schema({
//     name: {
//         type: String,
//         required : true,
//         trim: true

//     },
//     age : {
//         type: Number,
//         min: [0, 'age must be positive'],
//         validate(value){
//             if(value < 0){
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         validate(value) {
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cant be password')
//             }
//         }
//     }
// })

//     userSchema.pre('save', async function(next){
//         const user = this

//         console.log('Just before saving')

//         next() //next is getting called to move on , otherwise it will just hang on forever
//     })

//  const User = mongoose.model('User', userSchema )


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



module.exports = User