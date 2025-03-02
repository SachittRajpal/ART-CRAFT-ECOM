const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Country = sequelize.define('Country', {
    countryid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Correct option name is autoIncrement (camelCase)
    },
    CountryName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'countries', // Optional: You can specify the table name if you want
    timestamps: false // Optional: If you don't want Sequelize to add createdAt/updatedAt
});

module.exports = Country;
