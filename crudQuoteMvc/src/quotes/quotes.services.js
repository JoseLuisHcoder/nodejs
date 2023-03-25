//? importamos desde controllers
const quoteControllers = require('./quotes.controllers')

//? obteniendo todos los datos de la DB
const getAllQuote = (req, res) => {
    const data = quoteControllers.findAllQuotes()
    res.status(200).json(data)
}

//? obteniendo los datos segun un Parametro que envia el usuario
const getQuoteById = (req, res) => {
    const id = req.params.id
    const data = quoteControllers.findQuoteById(id)
    if(data){
        //? caso exitoso
        res.status(200).json(data)
    } else {
        //? error
        res.status(404).json({ message: 'Invalid ID'})
    }
}

//? creado una quote
const postNewQuote = (req, res) => {
    const {quote, author, year} = req.body
            //si podemos ver en nuestro controller, el quotes es el unico dato obligatorio y el resto opcional, por lño que es el unico que validamos en el if
    if(quote){
        //? caso exitoso
        const data = quoteControllers.createNewQuote({quote, author, year})
        res.status(201).json(data)
    } else {
        //! error
        res.status(400).json({
            message: 'Invalid data',
        fields:{
            author: 'string',
            quote:'string',
            year: 2022
        }
        })
    }
}

//? Random Quote
const getRandomQuote = (req, res) => {
    const data = quoteControllers.findRandomQuote()
    if(data){
        //?caso exitoso
        res.status(200).json(data)
    } else {
        //! error  se utilizara un 400 y no un 404, porque el dato existe, solo que esta vacio en este momento
        res.status(400).json({
            message: "DB is empty"
        })
    }
}   

module.exports = {
    getAllQuote,
    getQuoteById,
    postNewQuote,
    getRandomQuote
}