const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');

const port = process.env.PORT || 4000;

app.use(express.json())

const bounties = [
    {
        firstName: "Luke", lastName:"Skywalker",
        living: true,
        bountyAmount: 1000,
        type:"Jedi",
        _id: uuidv4()
}
];

app.get("/bounty",(req,res) => {
    res.send(bounties)
});
app.post("/bounty",(req, res) => {
    const newBounty =  req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added to the database`)
    
})

app.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
});