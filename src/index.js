const express = require('express')
require('./db/mongoose')
const User = require('./models/users')

const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async(req,res) => {
    const user = new User(req.body)
    
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
    
    await user.save()


    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400) //https status report 400 as user side error
    //     res.send(e)
    // })
})

app.get('/users', async (req,res) => {
    try{
        const users= await User.find({})
        res.send(users)
    }catch(e){
        res.status(500).send(e)
    }
    
    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((e) => {
    //     res.status(500).send() // status 500 is internal server error
    // })
})

// get by user id----> dynamic value generates(id can be any name here) :id
app.get('/users/:id', async(req,res) => {
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }


    // User.findById(_id).then((user) => {
    //     if(!user){
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((e)=> {
    //     res.status(500).send(e)
    // })
    
   // console.log(req.params)
})

app.patch('/users/:id' ,async(req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(400).send({ error: 'Invalid operation'})
    }

    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})


app.post('/tasks' ,async (req,res) => {
    const task = new Task(req.body)

    try{
        await task.save()
        res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
    
    
    // task.save().then(() => {
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(400)
    //     res.send(e)
    // })
})

app.get('/tasks', async (req,res) => {
    try{
        const tasks = await Task.find({})
        res.send(tasks)
    }catch(e){
        res.status(500).send(e)
    }

    // Task.find({}).then((task) => {
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})


app.get('/tasks/:id', async (req,res) => {
    const _id = req.params.id

    try{
        const task = await Task.findById(_id)
        res.send(task)
    }catch(e){
        res.status(404).send(e)
    }

    // Task.findById(_id).then((task) => {
    //     if(!task){
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
    
})

app.listen(port , () => {
    console.log('Server is up on port' + port)
})

