const bcrypt = require ('bcrypt')

const hashPassword = (plainPassword) => {
    // plainPassword = contraseña en texto plano
    return bcrypt.hashSync(plainPassword, 10)
}
// console.log(hashPassword('Lucianita1*'));

// para ver en la consola poner en la terminal  node ./src/utils/crypto.js

const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
}
//le pasamos los datos y mostramos en consola
console.log(comparePassword('Lucianita1*', '$2b$10$t4pvzFAZH9JNvzfokAcq3uDUdiPXnsykddtQiLgodPXKtXBaBpkf2'));

module.exports = {
    hashPassword,
    comparePassword
}