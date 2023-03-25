const router = require('express').Router()

const userServices = require('./users.services')

router.get('/users', userServices.getAllUSers)
router.post('/users', userServices.postCreateNeuser)

module.exports = router