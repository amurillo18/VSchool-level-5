const express = require("express");
const app = express();
const morgan = require("morgan");

const port = process.env.PORT || 4000;

app.use(express.json())
app.use(morgan('dev'))
app.use('/bounty', require("./routes/bounties"))

app.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
});