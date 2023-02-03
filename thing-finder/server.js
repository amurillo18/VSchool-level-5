const express = require("express");
const app = express();

const port = process.env.PORT || 4001;

app.use(express.json());


const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
];


// app.get("/inventory", (req, res) => {
//     res.send(inventoryItems)
// });

app.get("/inventory",(req,res) => {
    const filteredItems = inventoryItems.filter(item => 
         item.type === req.query.type
    )
    res.send(filteredItems)
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
});