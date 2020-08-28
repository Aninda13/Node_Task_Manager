require('../src/db/mongoose')
const User = require('../src/models/users')


// 5f45c56af46ede634636c214

// User.findByIdAndUpdate('5f45c56af46ede634636c214', { age: 200 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 200 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeandCount = async(id,age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count;
}

updateAgeandCount('5f45c56af46ede634636c214', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})