import express from "express";
import{
    getTodo,
    shareTodo,
    deleteTodo,
    getTodosByID,
    createTodo,
    toggleCompleted,
    getUserByEmail,
    getUserByID,
    getSharedTodoByID
} from "./database.js";

const app = express();
app.use(express.json());

//primera request
app.get("/todos/:id",async(req,res)=>{
    const todos = await getTodosByID(req.params.id);
    res.status(200).send(todos); //status 200 es correcto
})

app.listen(8080,()=>{
    console.log("Servidor corriendo en el puerto 8080")
});