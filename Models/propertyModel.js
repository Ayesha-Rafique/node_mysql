const { DataTypes } = require("sequelize");
const sequelize = require("../Config/db");

const Property = sequelize.define("Property", {

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "properties", // Explicitly set the table name
});
console.log("Property model defined");
module.exports = Property;
