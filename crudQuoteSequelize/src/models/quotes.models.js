

const {DataTypes} = require('sequelize')

const db =require ('../utils/database')

const Quotes = db.define('quotes', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    quote:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    author:{
        type:DataTypes.STRING,
        defaultValue:'Anonymous'
    },
    year:{
        type:DataTypes.INTEGER,   // si nosotros queremos q este valor sea null, o no tenga ningun valor se deja tal como esta ahora
        
    }
},{
   timestamps:false 
})

module.exports = Quotes
