const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const User = sequelize.define('User', {
    userid: {
        type: DataTypes.UUID,   //  Use UUID instead of STRING
        defaultValue: DataTypes.UUIDV4, // ✅ Auto-generate UUID
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailid: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    roleid: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = User;
