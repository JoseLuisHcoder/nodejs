//? este archivo va a manejar todo lo relacionado a acciones de la base de datos de todos

const Tasks = require('../models/task.model')

const todoDB = []
//todo

// {
//     id: 5,
//     title:'practicar exprese',
//     description:'Ver videso de apoyo',
//     is_completed:false
// }


let id = 1

const findAllTodos = async() => {
    // esta funcion debe traer todos los todo´s de mi base de datos
    const data = await Tasks.findAll()
    
    return todoDB
}

const findTodoById = (id) => {
    // esta funcion debe retornar un tofo dependiendo del id
    const todo = todoDB.find(item => item.id == id)
    return todo
}

const createTodo = (obj) => {
    //esta duncion debe brear un nuevo todo en mi base de datos y retornar el todo creado
    const newTodo = {
        id:id++,
        title: obj.title,
        description: obj.description,
        is_completed: false
    }
    todoDB.push(newTodo)
    return newTodo
}

module.exports = {
    findAllTodos,
    findTodoById,
    createTodo
}