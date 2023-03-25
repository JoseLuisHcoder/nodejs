
const Users = require('../models/users.models')
const { v4: uuidv4 } = require('uuid')

//* retornar todos los usuarios

const findAllUsers = async() => {
    const data = await Users.findAll()
    return data
}
//* creadon un nuevo usuario

const createNewUser = async (obj) => {
    const data = await Users.create({
        id: uuidv4(),
        firstName:obj.firtsName,
        lastName: obj.lastNanme,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday

    })
    return data
}

module.exports = {
    findAllUsers,
    createNewUser
}