require('dotenv').config(); // Load environment variables
const sequelize = require('./configs/database'); // Import DB connection
const app = require('./app'); // Import app.js
const PORT = process.env.PORT || 5000; 
// Sync Database
sequelize.sync({ alter: true }) 
    .then(() => {
        console.log('Database Connected & Synced');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('Database Sync Error:', err));
