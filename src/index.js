const express = require('express')
require('./db/mongoose')
const User = require('./models/users')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(userRouter)
app.use(taskRouter)
app.use(express.json())


app.listen(port , () => {
    console.log('Server is up on port' + port)
})

