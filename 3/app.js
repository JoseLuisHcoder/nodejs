//Dependencias
const express = require('express')

//?initial configs
const port = 9000
const app = express()
//? habilitar recibir formato json
app.use(express.json())


const todoDB = []
//todo

// {
//     id: 5,
//     title:'practicar exprese',
//     description:'Ver videso de apoyo',
//     is_completed:false
// }


let id = 0

app.get('/', (req, res) => {
    res.json({
        message:'OK'
    })
})

//? /todo  /todo/:id
//rutas de TODO´S
app.get('/todo', (req, res) => {
    res.status(200).json(todoDB)
})

app.post('/todo', (req, res) => {
    const {title, description} = req.body

    if(title && description){
        const newTodo = {
            id:id++,
            title: title,
            description: description,
            is_completed: false
        }
        todoDB.push(newTodo)
        res.status(200).json(newTodo)
    } else {
        res.status(400).json({message:'Invalid data'})
    }

})


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})