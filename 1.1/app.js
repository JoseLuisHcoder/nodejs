const express = require('express')
const port = 9000
const app = express()

app.get('/hola', (req, res) => {
    //? req  contiene toda la informacion del cliente
    //? res  es todo lo que vamos a mandar
    res.json({
        message:"hola mundo"
    })
})
app.delete('/hola', (req, res) => {
    res.json({
        message: "hola desde delete"
    })
    
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})