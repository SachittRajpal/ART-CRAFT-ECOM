const { Sequelize } = require('sequelize');
const config = require('./config');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize({
  database: dbConfig.database,
  username: dbConfig.username,
  password: dbConfig.password,
  host: dbConfig.host,
  dialect: dbConfig.dialect, // Explicitly specify the dialect
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;