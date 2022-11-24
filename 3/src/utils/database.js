const {Sequelize} = require('sequelize')

// este es un contructor, el cual es especif
const db = new Sequelize({
    dialect:'postgres',
    host:'localhost',
    database:'todo-db',
    username:'postgres',
    password:'Lucianita1*',
    port: 5432

})

// esto se corto y paso a app
// db.authenticate()
// .then(() => console.log('Database Authenticada correctamente'))
// .catch((err) => console.log(err))

// db.sync()
//     .then(() => console.log('Database Sincronizada correctamente'))
//     .catch((err) => console.log(err))

    module.exports = db