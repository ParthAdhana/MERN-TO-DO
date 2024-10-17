/*
Todo{
    title:string,
    description: string,
    completed: bool
}
*/
const mongoose= require('mongoose');

mongoose.connect('').then(()=>{
    console.log("Connected to moongose schema");
})

const Schema=mongoose.Schema;


const TodoShema= new Schema({
    title: String,
    description: String,
    completed: Boolean
});


const todo=mongoose.model('todos',TodoShema);

module.exports={
    todo:todo
}
