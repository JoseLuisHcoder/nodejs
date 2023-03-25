const express = require('express')
const db = require('../src/utils/database')
const useRouter = require('./users/users.router')

const port = 9000
const app = express()

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
        console.log(err);
    })

app.use('/api/v1', useRouter)


app.get('/', (req, res) => {
    res.status(200).json({message: 'OK'})
})

app.listen(port, () => {
    console.log(`Server started at port; ${port}`)
})