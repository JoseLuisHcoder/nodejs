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
    
    return data
}

const findTodoById = async (id) => {
    // esta funcion debe retornar un tofo dependiendo del id
    //const todo = await Tasks.findByPk(id)
    const todo = await Tasks.findOne({        //quitamos este codigo porque la base de datos ahora es real   todoDB.find(item => item.id == id)
        where: {
            id: id

        }
    })  
    return todo
}

const createTodo = async(obj) => {
    //esta duncion debe brear un nuevo todo en mi base de datos y retornar el todo creado
    const newTodo = await Tasks.create({
        title:obj.title,
        description:obj.description
    })
    
    // {
    //     id:id++,
    //     title: obj.title,
    //     description: obj.description,
    //     is_completed: false
    // }
    // todoDB.push(newTodo)
    return newTodo
}

//este controlador nos sirve para hacer PATCH y PUT
const updateTodo = async (id, obj) => {
    const data = await Tasks.update(obj, {
        where: {
            id:id
        }
    })
    return data    // data retorna un arreglo que puede ser de la siguiente forma [1] o [0]
}

const deleteTodo = async (id) => {
    const data = await Tasks.destroy({
        where:{
            id:id
        }
    })
    return data  // retorna 1 en caso de que se hara eliminado, y 0 en caso de q no exista
}

module.exports = {
    findAllTodos,
    findTodoById,
    createTodo,
    updateTodo,
    deleteTodo
}