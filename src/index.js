const express = require('express')
require('./db/mongoose')
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

const bcrypt = require('bcrypt')

const myFunction = async() => {
    const password = 'Red13425!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('Red13425!', hashedPassword)
    console.log(isMatch)
}

myFunction()