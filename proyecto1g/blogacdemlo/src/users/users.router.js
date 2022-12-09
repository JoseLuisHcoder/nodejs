const router = require('express').Router()
const userServices = require('./users.services')

const passportJWT = require('../middleware/auth.middleware')

// router.get("/", passportJWT.authenticate('jwt', {session:false}), userServices.getAllUsers)
// router.post("/", userServices.postUser)

router.route("/")
    .get(passportJWT.authenticate('jwt', {session:false}), userServices.getAllUsers)
    .post(userServices.postUser)

router.get('/me', passportJWT.authenticate('jwt', {session:false}), userServices.getMyUser)
router.patch('/me', passportJWT.authenticate('jwt', {session:false}), userServices.patchMyUser )
router.delete('/me', passportJWT.authenticate('jwt', {session: false}), userServices.deleteMyUser)

router.get("/:id", userServices.getUserById) //? /api/v1/users/:id
router.patch('/:id', userServices.patchUser) //? /api/v1/users/:id
router.delete('/:id', userServices.deleteUser) //? /api/v1/users/:id


module.exports = router

// passportJWT.authenticate('jwt', {session:false})