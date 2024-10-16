const zod= require('zod');

// schema to post a todo
/*
    title:String
    description:String
    completed:bool
*/

const createTodo= zod.object({
    title:zod.string(),
    description:zod.string(),
    completed:zod.boolean(),
})

// schema to mark todo as completed
/*
    id:String
*/

const updateTodo=zod.object({
    id:zod.string(),
})