//email
//password
const {findUserByEmail} = require('../users/users.controllers')
const {comparePassword} = require('../utils/crypto')


// esta duncion va validar si los datos pertenecen a un usuario en especifico
const checkUserCredetntial = async(email, password) => {
    try {
        const user = await findUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password)
            if(verifyPassword){
                return user
            }
            return null
    } catch (error) {
        return null
    }

}

// checkUserCredetntial('jl@gmail.com', 'tarija123')
//     .then(data => console.log(data))
//     .catch(err => console.log(err)) 

module.exports = checkUserCredetntial



