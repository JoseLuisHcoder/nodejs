
const Categories = require('./categories.models')
const Posts = require('./posts.models')
const Users = require('./users.models')

const initModels = () => {
    /*
    has model1.hasOne(model2) model2 tiene la llave foranea
    belongs  model1.belongsTo(model1) model2 tiene la llave foranea
    */

    //? ejemplo relacionamos Category 1 -> M posts
        Categories.hasMany(Posts)
    //? 1 post -> 1 category
        Posts.belongsTo(Categories)

        Users.hasMany(Posts)
        Posts.belongsTo(Users)
}
// init Model se importa en app.js
module.exports = initModels