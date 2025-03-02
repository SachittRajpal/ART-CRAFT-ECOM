const { sequelize, User, Role, Country } = require('./models');

async function seedDatabase() {
    try {
        await sequelize.sync({ force: true }); // WARNING: This will clear all data!
        console.log('✅ Database Reset & Synced');

        // Add roles
        const adminRole = await Role.create({ name: 'Admin' });
        const userRole = await Role.create({ name: 'User' });

        // Add users
        await User.create({ name: 'Sachin', email: 'sachin@example.com', password: 'hashedpassword', roleId: adminRole.id });
        await User.create({ name: 'John Doe', email: 'john@example.com', password: 'hashedpassword', roleId: userRole.id });

        console.log('✅ Sample Data Inserted!');
    } catch (err) {
        console.error('❌ Seeding Error:', err);
    } finally {
        process.exit();
    }
}

seedDatabase();
