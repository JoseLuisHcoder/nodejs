const express = require('express')
//import express from 'express'

const file = require('./package.json')
//import file from './package.json'
//! protocolo TCP/IP
const port = 8500
const app =  express()


app.get('/hola', (peticion, respuesta) => {
    respuesta.json({
        message:'hola mundo'
    })
    //? la peticion contiene toda la informacion de lo q se esta pidiendo ej: 
    //? en la respuesta va cualquien informacion en formato json, puede ser un string, un arreglo, un objeto 
})

app.delete('/hola', (peticion, respuesta) => {
    respuesta.json({
        message:'hola mundo desde delete'
    })
   
})


app.listen(port, () => {
    console.log(`Server Started at port ${port}`);
})