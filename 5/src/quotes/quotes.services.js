// file´s imports
const  quoteControllers = require('./quotes.controllers')

const getAllQuotes = (req, res) => {
    const data = quoteControllers.findAllQuotes()
    res.status(200).json(data)
}

const getQuoteById = (req, res) => {
    const id = req.params.id
    const data = quoteControllers.findQuoteById(id)
    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({message:'Invalid ID'})
    }
}

const postNewQuote = (req, res) => {
    const {quote, author, year} = req.body
        if(quote){
            const data =  quoteControllers.createNewQuote({quote, author, year})
            res.status(201).json(data)
        } else {
            res.status(400).json({
                message: 'Invalid Data', 
                fields: { 
                    author: "string",
                    quote: "string*",
                    year:"2022"
            },
        });
        }

};

const getRandomQuote = (req, res) => {
const data = quoteControllers.finRandomQuote()
   if(data){
        res.status(200).json(data)
   } else {
        res.status(400).json({message:'DB is empty'})
   }

  }
  module.exports = {
    getAllQuotes,
    getQuoteById,
    getRandomQuote,
    postNewQuote
   }