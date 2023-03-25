//? dependencias
const express = require('express')
//* ultimo paso del crud, importamos Routers
const quoteRouter = require('./quotes/quotes.router')

//? initial config
const port = 9000
const app = express()

//?json request available
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK'})
})

//* despues de importar router
app.use('/api/v1', quoteRouter)


app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
})