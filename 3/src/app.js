//Dependencias
const express = require('express')

const db = require('./utils/database')

const taskRouter = require('./tasks/task.router')

//?initial configs
const port = 9000
const app = express()
//? habilitar recibir formato json
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message:'OK'
    })
})

app.use('/', taskRouter)

db.authenticate()
.then(() => console.log('Database Authenticada correctamente'))
.catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database Sincronizada correctamente'))
    .catch((err) => console.log(err))

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})



//const todoDB = []
//todo

// {
//     id: 5,
//     title:'practicar exprese',
//     description:'Ver videso de apoyo',
//     is_completed:false
// }


//let id = 0



//? /todo  /todo/:id
//rutas de TODO´S
// app.get('/todo', (req, res) => {
//     res.status(200).json(todoDB)
// })

// app.post('/todo', (req, res) => {
//     const {title, description} = req.body

//     if(title && description){
//         const newTodo = {
//             id:id++,
//             title: title,
//             description: description,
//             is_completed: false
//         }
//         todoDB.push(newTodo)
//         res.status(200).json(newTodo)
//     } else {
//         res.status(400).json({message:'Invalid data'})
//     }

// })

// app.get('/todo/:id', (req, res) => {
//     const id = req.params.id;

//     const todo = todoDB.find(item => item.id == id)

//     if(todo){
//         res.status(200).json(todo)
//     } else {
//         res.status(404).json({message: 'Invalid ID'})
//     }
// })

