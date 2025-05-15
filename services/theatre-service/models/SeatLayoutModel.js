const { sequelize } = require("../config/db");
const {DataTypes} = require('sequelize');

const SeatLayout = sequelize.define(
    "SeatLayout",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
          },
        layout: {
            type: DataTypes.JSONB,
            allowNull: false
          }
    },
    {freezeTableName:true}
);

module.exports = {SeatLayout}