const express = require('express')
const app = express()
const {createTodo} = require("./types");

// creates a todo
app.post('/todo',async()=>{
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You send the wrong input",
        })
        return;
    }
    try{
        await todo.create({
            title:createPayload.title,
            description:createPayload.description,
        })
         
    }
    catch(e){
        console.log("Unable to insert into db");
    }
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