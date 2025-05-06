const { sequelize } = require("../config/db");
const {DataTypes} = require('sequelize');

const Movie = sequelize.define(
    "Movie",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
          },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        rating:{
            type:DataTypes.FLOAT,
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
        },
        venue:{
            type:DataTypes.STRING
        },
        price:{
            type:DataTypes.INTEGER
        },
        ageLimit:{
            type:DataTypes.INTEGER
        },
        theatre:{
            type:DataTypes.UUID
        }
    },
    { freezeTableName: true }
);

console.log(Movie == sequelize.models.Movie)

module.exports = {Movie}