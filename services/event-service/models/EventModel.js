const {sequelize} = require('../config/db')
const {DataTypes} = require('sequelize')

const Event = sequelize.define(
    "Event",
    {
        id:{
            type:DataTypes.STRING,
            primaryKey:true,
            allowNull:false
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        posterURL:{
            type:DataTypes.STRING,
            allowNull:true
        },
        artists:{
            type:DataTypes.ARRAY(DataTypes.STRING)
        },
        date:{
            type:DataTypes.DATE
        },
        time:{
            type:DataTypes.TIME
        },
        duration:{
            type:DataTypes.STRING
        },
        language:{
            type:DataTypes.STRING
        },
        cataegories:{
            type:DataTypes.ARRAY(DataTypes.STRING)
        },
        venue:{
            type:DataTypes.STRING
        },
        price:{
            type:DataTypes.INTEGER
        },
        ageLimit:{
            type:DataTypes.INTEGER
        }
    },
    {freezeTableName:true}
);

module.exports = Event