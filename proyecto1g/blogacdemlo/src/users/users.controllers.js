const Users = require('../models/users.models')
const uuid = require('uuid')
const {hashPassword} = require('../utils/crypto')

const findAllUsers = async() => {
    const data = await Users.findAll()
    return data
}

const findUserById = async(id) => {
    const data = await Users.findOne({
        where:{
            id:id
        }
    })
    return data
}

const createUser = async(obj) => {
    const data = await Users.create({
        id: uuid.v4(),
        first_name: obj.first_name,
        last_name:obj.last_name,
        user_name:obj.user_name,
        email: obj.email,
        // la contraseña debe estar encriptada
        password:hashPassword(obj.password),
        age:obj.age,
        // role   el rol debe ser proporcionado por un admin  y no manda el usuario
        country:obj.country
    })
    return data
}

//creamos esta const para el auth.controller.js

const findUserByEmail = async(email) => {
    const data = await Users.finfOne({
        where: {
            email:email
        }
    })
    return data
}
module.exports = {
    findAllUsers, 
    findUserById,
    createUser,
    findUserByEmail
}
