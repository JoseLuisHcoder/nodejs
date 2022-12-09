const {DataTypes} = require('sequelize')

const db = require('../utils/database')
const Categories = require('./categories.models')
const Users = require('./users.models')

const Posts = db.define('posts', {
    id:{
        type: DataTypes.UUID,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false

    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false

    },
    //en Sequelize no se maneja Snake sino Camelcase, y la gestion lo hara atraves de 
    userId:{
        type:DataTypes.UUID,
        allowNull:false,
        references: {
            key: 'id',
            model: Users
        }

    },
    //el cover son las direcciones urls de las imagenes o portadas
    coverUrl:{
        type:DataTypes.STRING,

    },

    // las llaves en sequelize debe tener una sintaxis en especifico, por lo que debe ser en singular  category_id
    categoryId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        //aqui crearemos la llave foranea bajo l sintaxis de references y lo relacionamos con el modelo Categories el cual importamos
        references:{
            key: 'id',
            model: Categories

        }
    }
})
module.exports = Posts