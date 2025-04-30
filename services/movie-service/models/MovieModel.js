const { sequelize } = require("../config/db");
const {DataTypes} = require('sequelize');

const Movie = sequelize.define(
    "Movie",
    {
        id:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            primaryKey:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        rating:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        posterURL:{
            type:DataTypes.STRING,
            allowNull:true
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        language:{
            type:DataTypes.STRING
        },
        releaseDate:{
            type:DataTypes.DATE
        },
        duration:{
            type:DataTypes.INTEGER
        },
        genre:{
            type:DataTypes.ARRAY(DataTypes.STRING)
        }
    },
    { freezeTableName: true }
);

console.log(Movie == sequelize.models.Movie)

module.exports = {Movie}