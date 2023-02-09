const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://Amurillo:{password}@cluster0.uvmcw4x.mongodb.net/crudStoredb?retryWrites=true&w=majority", () => console.log('connected to database'))

app.use('/inventory', require('./routes/inventory'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(4000, () => {
    console.log('server is running on port 4000')
})
