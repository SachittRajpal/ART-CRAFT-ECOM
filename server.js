require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');  // Import all models from models/index.js

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Sync Database
sequelize.sync({ alter: true })
    .then(() => {
        console.log('✅ Database Connected & Synced');
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch(err => console.error('❌ Database Sync Error:', err));
