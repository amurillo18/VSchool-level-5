const express = require("express");
const app = express();
const { v4: uuidv4 } =  require("uuid");
const port = process.env.PORT || 4000;

app.use(express.json())

const todos = [
    {
    name: "The name",
    description: "The description of the todo",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuidv4()
    }   
]
//return entire list of todos
app.get("/todos",(req,res) => {
    res.send(todos)
});
// allows new todo items to be posted to the array
app.post("/todos",(req,res) => {
    const newTodo =  req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Successfully added new item to the database`)
});

//allows the user to update a todo by its _id
app.put("/todos/:todoId",(req,res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
});

//allows the user to delete a todo by its _id
app.delete("/todos/:todoId",(req,res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("successfully deleted todo")
});

//allows the user retrieve a single todo by its _id
app.get("/todos/:todoId",(req,res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const foundTodo = Object.assign(todos[todoIndex], req.body)
    res.send(foundTodo)
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})