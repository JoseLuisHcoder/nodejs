const express = require('express')
const port = 9000
const app = express()

const db = require('./utils/database')

app.use(express.json())

db.authenticate()
    .then(() => {
        console.log('Database authenticated');
    })
    .catch(err => {
        console.log(err)
    })
db.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch(err => {
        console.log(err)
    })
    
// const usersDB = []
// let id = 1

/**
 * {
 * id:id++
 * firstName: "jose",  *
 * lastName: "jjjj",   *
 * email:"sdfdsfsdf",  *
 * password:"123456"   *
 * birthday:"YYYY/MM/DD"
 * }
 */

//* rutas get('/users) post('/users) get('/users/:id)

//* all users
app.get('/users', (req, res) => {
    res.status(200).json(usersDB)
})
//*Create
app.post('/users', (req, res) => {
    const {firstName, lastName, email, password, birthday} = req.body
    if(firstName, lastName, email, password){
        const newUser = {
                id:id++,
                firstName,
                lastName,   
                email,  
                password,
                birthday
            }
            db.push(newUser)
            res.status(200).json(newUser)
    } else {
        res.status(400).json({
            message:"invalid data",
            fields:{
                "firstName": "jose",
                "lastName": "jjjj",
                "email":"sdfdsfsdf",
                "password":"123456",
                "birthday":"YYYY/MM/DD"
                }
        })
    }
})
//* Params
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const userId = db.find(user => user.id == id)
    if(userId){
        res.status(200).json(userId)
    } else {
        res.status(400).json({message:"invalid Id"})
    }
})

///*Delete
app.delete('/users/:id', (req, res) => {
    const id = req.params.id
    const userIndex= db.findIndex(user =>  user.id == id)
    if(userIndex !==-1 ){
        const deleteUser = usersDB.splice(userIndex, 1)[0]
        res.status(200).json({message: "delete user"})
     } else {
        res.status(400).json({message:`Usuario con el ${id} no encontrado`})
     }
})

//*Update
app.put('/users/:id', (req, res) => {
    const id = req.params.id
    const userIndex= db.findIndex(user =>  user.id == id)
    if(userIndex !==-1 ){
        const userUpdate = db[userIndex]
        const {firstName, lastName, email, password, birthday} = req.body
        userUpdate.firstName = firstName,
        userUpdate.lastName = lastName,
        userUpdate.email = email,
        userUpdate.password = password,
        userUpdate.birthday = birthday

        res.status(200).json({message: "Update user"})
     } else {
        res.status(400).json({message:`Usuario con el ${id} no encontrado`})
     }
})

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK'})
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})