const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const States = sequelize.define('State', {
    stateid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true  // Auto-increment for stateid
    },
    stateName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'states', // Explicitly defining table name
    timestamps: false     // Optional: If you don't need createdAt/updatedAt
});

module.exports = States;
