require('dotenv').config(); // Load environment variables
const sequelize = require('./configs/database'); // Import DB connection
const app = require('./app'); // Import app.js (which contains routes)

const PORT = process.env.PORT || 5000; // Default to 5000 if undefined

// Sync Database
sequelize.sync({ alter: true }) // Adjust tables if needed
    .then(() => {
        console.log('✅ Database Connected & Synced');
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch(err => console.error('❌ Database Sync Error:', err));
