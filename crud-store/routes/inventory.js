const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')
// get one
inventoryRouter.get('/:itemId',(req, res, next)=> {
    Inventory.findOne({_id: req.params.itemId}, (err, item) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200). send(item)
    })
})
//get all
inventoryRouter.get('/',(req, res, next)=> {
    Inventory.find((err, inventory) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200). send(inventory)
    })
})
// put
inventoryRouter.put('/:itemId',(req, res, next)=> {
    Inventory.findOneAndUpdate({_id:  req.params.itemId}, req.body, {new: true}, (err, updatedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedItem)
    })
})
// post
inventoryRouter.post('/',(req, res, next)=> {
    const addInventory = new Inventory(req.body)
    addInventory.save((err, savedInventory) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200). send(addInventory)
    })
})
// delete
inventoryRouter.delete('/:itemId',(req, res, next)=> {
    Inventory.findOneAndDelete({_id:  req.params.itemId},(err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.name} from the database`)
    })
})

module.exports = inventoryRouter