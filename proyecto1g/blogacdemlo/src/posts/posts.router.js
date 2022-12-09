const router = require('express').Router()

const postServices = require('./posts.services')
const passportJWT = require('../middleware/auth.middleware')

router.route("/")
    .get(postServices.getAllPosts)
    .post(passportJWT.authenticate('jwt', {session: false}), postServices.createNewPost)

module.exports = router