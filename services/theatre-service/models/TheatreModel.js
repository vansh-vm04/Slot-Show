const { sequelize } = require("../config/db");
const {DataTypes} = require('sequelize');


const Theatre = sequelize.define("Theatre", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name:{
    type:DataTypes.STRING
  },
  location:{
    type:DataTypes.STRING
  },
  seatLayoutId:{
    type:DataTypes.UUID,
    allowNull:true,
    references:{
      model:'SeatLayout',
      key:'id'
    }
  }
},
{freezeTableName:true}
);

module.exports = {Theatre}
