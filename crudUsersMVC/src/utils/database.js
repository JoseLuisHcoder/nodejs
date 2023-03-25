const {Sequelize} = require('sequelize')


const db = new Sequelize({
    dialect:'postgres',
    host:'localhost',
    port:'5432',
    username:'postgres',
    password:'Lucianita1*',
    database:'crudUsersDB'

})
module.exports = db