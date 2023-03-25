const usersControllers = require('./users.controllers')

//* obteniendo todos los datos de la DB
const getAllUSers = (req, res) => {
    const data = usersControllers.findAllUsers()
    res.status(200).json(data)
}

//* creando un usuario
const postCreateNeuser = (req, res) => {
    const{firstName, lastName, email, password, birthday} = req.body
    usersControllers.createNewUser({firstName, lastName, email, password, birthday})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({
                message:err.message,
                fields:{
                    firstName: 'string',
                    lastName: 'string',
                    email: 'string',
                    password: 'string',
                    birthday:'YYYY/MM/DD'
                }
            })
        })
}


module.exports = {
    getAllUSers,
    postCreateNeuser
}