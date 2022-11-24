const {DataTypes} = require('sequelize');

const db = require('../utils/database');

// {
//     id: 5,
//     title:'practicar exprese',
//     description:'Ver videso de apoyo',
//     is_completed:false
// }

const Tasks = db.define('tasks', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type:DataTypes.STRING,
        allowNull: false, 
        unique:true         // esto se pone para que estos datos sean obligatorios
    },
    description:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
    is_completed: {
        type:DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false    // se crea este objeto para que en las tablas no se creen las columnas createdAt y updateAt
})

module.exports = Tasks