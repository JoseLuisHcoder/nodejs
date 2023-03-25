const {Sequelize} = require('sequelize');

const db = new Sequelize({
    
    dialect:'postgres',
    host:'localhost',
    port:'5432',
    username:'postgres',
    password:'Lucianita1*',
    database:'quotes2023'
})

module.exports = db

