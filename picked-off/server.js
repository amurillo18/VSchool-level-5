const express = require("express");
const app = express();
const {v4: uuidv4} = require("uuid");

app.use("/animal", require('./middleware'))

const animal = {
    name: "Mazey",
    type: "dog",
    _id: uuidv4()
}

app.get("/animal", (req, res) => {
    const updateAnimal = Object.assign(animal, req.body)
    res.send(updateAnimal)
})



const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`);
});