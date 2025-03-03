const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');
const Country = require('./country'); 
const State = require('./state');

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
    tableName: 'country_state', 
    timestamps: false 
});



// Many-to-many relationship: A country can have many states, and a state can belong to many countries.
Country.belongsToMany(State, { through: Country_State, foreignKey: 'countryid' });
State.belongsToMany(Country, { through: Country_State, foreignKey: 'stateid' });

module.exports = Country_State;
