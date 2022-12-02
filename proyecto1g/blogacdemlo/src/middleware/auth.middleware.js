// este sera un Middleware para proteger las rutas

// Passport tiene diferentes estrategias  par amanegar Logins(bearer, jwt, facebook, google, etc..)

const JwtStrategy = require('passport-jwt').Strategy;

//estraer el token de los headers de mi peticion
const ExtractJwt = require('passport-jwt').ExtractJwt;

const passport = require('passport');
const jwtSecret = require('../../config').api.jwtSecret;

const {findUserById} = require('../users/users.controllers');



    const options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey : jwtSecret,
    }
    passport.use(
        new JwtStrategy(options, async(tokenDecoded, done) => {
            //done(error, tokenDecoded)
            try {
                const user = await findUserById(tokenDecoded.id)
                    if(!user){
                        return done(null, false) // no existe un error, pero tampoco existe  el usuario
                    }
                    return done(null, tokenDecoded) // no existe un error pero si un usuario
            } catch (error) {
                return done(error, false)  // Si existe un error pero un usuario
            }
        })
    )


//? Esto seria un ejemplo de tokenDecoded:
//* {
//*    "id": "1ee0b8ea-fce3-4b0a-b9ad-6cb0045586db",
//*    "user_name": "dany",
//*    "role": "admin",
//*    "iat": 1669947474
//* }

module.exports = passport;

// module.exports = {
//     passportJWT : passport
// }

