//? dependecias
const router = require('express').Router()

//? File imports
const quoteServices = require('./quotes.services')

router.get('/quotes', quoteServices.getAllQuote)
router.post('/quotes', quoteServices.postNewQuote)
router.get('/quotes/random', quoteServices.getRandomQuote)
router.get('/quotes/:id', quoteServices.getQuoteById)

module.exports = router