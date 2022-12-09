
const jwt = require('jsonwebtoken')
const { json } = require('sequelize')
const checkUserCredetntial = require('./auth.controller')

const jwtSecret = require('../../config').api.jwtSecret

const postLogin = (req, res) => {
    const {email, password} = req.body

    if(email && password){
        checkUserCredetntial(email, password)
        .then((data) => {
            if(data){
                const token = jwt.sign({
                    id:data.id,
                    user_name:data.user_name,
                    role:data.role
                    //se necesita una palabra secreta para que no nos capturen los token, la creamosn en el archivo .env   como JWT_SECRET, tambien el archivo config.js agregamos jwtSecret: proces.env.JWT_SECRET
                }, jwtSecret)
                //jwtSecret,{expiresIn})  este expiresIn se puede poner para dar la duracion del token
                res.status(200).json({
                    message:'Correct Credentials',
                    token
                })
            } else {
                res.status(401).json({message:'Invalid Credentials'})
            }
        })
        .catch((err) => {
            res.status(400).json({message:err.message})
        })
    } else {
        res.status(400).json({message:'Missing Data', fields:{email:'example@gmail.com', password:'string'}})
    }
}

module.exports = { postLogin}