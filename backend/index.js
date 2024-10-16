const express = require('express')
const app = express()


// creates a todo
app.post('/todo',()=>{
    
})

// fetches all the todos.
app.get('/todos', function (req, res) {
})

// marks the todo as completed.
app.put("/completed",()=>{
    
})
app.listen(3000,()=>{
    console.log("Server started");
    
})