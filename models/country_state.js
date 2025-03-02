const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const Country = require('./country'); // Assuming the Country model is in models/country.js
const State = require('./state'); // Assuming the State model is in models/state.js

const Country_State = sequelize.define('Country_State', {
    countryid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stateid: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'country_state', // Optional, this makes the table name explicit
    timestamps: false // Set to true if you want to use createdAt/updatedAt fields
});

// Define the associations

// Many-to-many relationship: A country can have many states, and a state can belong to many countries.
Country.belongsToMany(State, { through: Country_State, foreignKey: 'countryid' });
State.belongsToMany(Country, { through: Country_State, foreignKey: 'stateid' });

module.exports = Country_State;
