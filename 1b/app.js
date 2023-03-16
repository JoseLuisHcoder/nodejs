const express = require('express')
const port = 6000
const app = express()

app.use(express.json())

const todoDB = []
let id = 1

/*
{
    id: nosotros gestionamos,
    title:"title",
    description:"description",
    is_completed:false   gestionamos nosotros
}
*/  

//* rutas get('/todo) create post('/todo) params get('/todo/:id')

//?READ
app.get('/todo', (req, res) => {
    res.status(200).json(todoDB)
})
//?CREATE
app.post('/todo', (req, res) => {
    const {title, description} = req.body
    if(title && description){
        const newTodo = {
            id:id++,
            title,
            description,
            is_completed: false
        }
        todoDB.push(newTodo)
        res.status(200).json(newTodo)
    } else {
        res.status(400).json({
            message:'invalid data'
        })
    }
   
//? PARAMS

})
app.get('/todo/:id', (req, res) => {
    const id = req.params.id
    const todo = todoDB.find(item => item.id == id)
    if(todo){
        res.status(200).json(todo)
    } else {
        res.status(404).json({ message:'Invalid ID'})
    }
    
   
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})