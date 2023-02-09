const express = require("express")
const Router = express.Router();
const Bounty = require("../models/bounty")


Router.get("/",(req,res,next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
});
Router.post("/",(req, res ,next) => {
    const newBounty =  new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedBounty)
    })
});

Router.put("/:bountyId", (req,res) => {
    Bounty.findOneAndUpdate({_id: req.params.bountyId},
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedBounty)
        })
    
});

Router.delete("/:bountyId",(req,res)=> {
    Bounty.findOneAndDelete(
        {_id: req.params.bountyId},
        (err, deletedBounty) =>  {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Succesfully deleted ${deletedBounty.firstName} ${deletedBounty.lastName} from the database`)
        }
    )
});

module.exports = Router;