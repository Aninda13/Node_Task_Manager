const express = require('express')
require('./db/mongoose')
const User = require('./models/users')

const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req,res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400) //https status report 400 as user side error
        res.send(e)
    })
})

app.post('/tasks' , (req,res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.send(task)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

app.listen(port , () => {
    console.log('Server is up on port' + port)
})

