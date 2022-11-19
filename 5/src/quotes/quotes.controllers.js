const quotesDB = []
    let id = 1
// {
//     id:1,
//     author:'jose',
//     quote: 'Dudas?',
//     year: '2022'
// }

const findAllQuotes = () => {
    return quotesDB
}

const findQuoteById = () => {
    const data = quotesDB.find(quote => quote.id == id)
    return data
}

const createNewQuote = (obj) => {
    const newQuote = {
        id:id++ ,  // este valor lo admnistramos nosotros
        author: obj.author || 'Anonymous',
        quote: obj.quote,
        // year: obj.year ? obj.year : 'year unknown'  este dato va ser opcional y esta es l primera manera de estructura
        year: obj.year || 'year unknown'
    }
    quotesDB.DB.push(newQuote)
    return newQuote
}   

const finRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesDB.length)
    return quotesDB[randomIndex]
}

module.exports = {
    findAllQuotes,
    findQuoteById,
    finRandomQuote,
    createNewQuote

}