
const quotesDB = []
let id = 1

// {
//     id:1,
//     author:'Jose',
//     quote:'sigue adelante',
//     year:'2023'
// }

//? retornado todos los datos de la DB
const findAllQuotes = () => {
    return quotesDB
}

//? retornando datos cuando nos dan un parametro
const findQuoteById = (id) => {
    const filteredQuote = quoteDB.find(quote => quote.id == id)
    return filteredQuote
}

//? creando quote
const createNewQuote = (obj) => {
    const newQuote = {
        id: 1++,     //* gestionamos nosotros
        author: obj.author ? obj.author : 'Anonymous',  //? campos opcionales, por eso el uso de operadores
        quote: obj.quote,
        year: obj.year || 'Year umknown'  //? campos opcionales, por eso el uso de operadores
    }
    quotesDB.push(newQuote)
    return newQuote
}

//? mostrando una quote aleatoria
const findRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesDB.length)
    return quotesDB[randomIndex]
}

module.exports = {
    findAllQuotes,
    findQuoteById,
    createNewQuote,
    findRandomQuote
}