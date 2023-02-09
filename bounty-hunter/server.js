const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose")

const port = process.env.PORT || 4000;

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://Amurillo:{password}@cluster0.uvmcw4x.mongodb.net/bountyHunterdb?retryWrites=true&w=majority", () => console.log('connected to database'))

app.use('/bounty', require("./routes/bounties")) 

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
});
