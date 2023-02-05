const express = require("express")
const Router = express.Router();
const { v4: uuidv4 } = require('uuid');


const bounties = [
    {
        firstName: "Luke", lastName:"Skywalker",
        living: "true",
        bountyAmount: 1000,
        type:"Jedi",
        _id: uuidv4()
}
];

Router.get("/",(req,res) => {
    res.send(bounties)
});
Router.post("/",(req, res) => {
    const newBounty =  req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)
    
});

Router.put("/:bountyId", (req,res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
});

Router.delete("/:bountyId",(req,res)=> {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("successfully deleted bounty")
});

module.exports = Router;