const express = require('express')
const file = require('./package.json')

const port = 6000
const app = express()

app.get('/hola', (peticion, respuesta) => {
    respuesta.json({
        name:'jose',
        age:'43',
        country:'Bolivia'

    })
    //? la peticion contiene toda la informacion de lo q se esta pidiendo ej: 
    //? en la respuesta va cualquien informacion en formato json, puede ser un string, un arreglo, un objeto 
})

app.post('/hola', (peticion, respuesta) => {
    respuesta.json([
        'triton', 'DigitalZone', 'Startrek'
    ]      
    )
   
})

app.patch('/hola', (peticion, respuesta) => {
    respuesta.json([
        'Futbol', 'Caminar', 'Ciclismo'
    ]
    )
   
})

app.delete('/hola', (peticion, respuesta) => {
    respuesta.json({
        verb:peticion.method,
        params:peticion.params,
        body:peticion.body,
        ip:peticion.ip

    }
    )
   
})

//? peticion  request  req
//? respuesta  response  res

// app.get('/text/:mensaje/:edad/:nombre', (req, res) => {
//     const {mensaje, edad, nombre} = req.params
// })

app.get('/text/:mensaje/', (req, res) => {
    const mensaje = req.params.mensaje
    res.json({
        message: `Este es el mensaje por parametro ${mensaje}`
    })
})








app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})