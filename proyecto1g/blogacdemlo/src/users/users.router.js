const router = require('express').Router()
const userServices = require('./users.services')

const passportJWT = require('../middleware/auth.middleware')

router.get("/", passportJWT.authenticate('jwt', {session:false}), userServices.getAllUsers)
router.post("/", userServices.postUser)
router.get("/:id", userServices.getUserById)


module.exports = router