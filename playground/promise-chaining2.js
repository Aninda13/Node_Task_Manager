require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f4686faed03206a8a656c14').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskandCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed})
    return count;
}

deleteTaskandCount('5f304a468c6158044dbed9d7',false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})