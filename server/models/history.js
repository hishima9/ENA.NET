const { STRING, DATE } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const history = sequelize.define("history" , {
   
        DT: {
            DataTypes: DATE,
            allownull : false,

        },

        
        type: {
            DataTypes: STRING,
            allownull : false,
            
        },
        
        DT: {
           DataTypes : STRING,
            allownull : false,
            
        },
   
    });
    return history;
   };