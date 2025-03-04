const Country = require('../models/country');

// Create a new country
exports.create = async (req, res) => {
    try {
        const country = await Country.create(req.body);
        res.status(201).json(country);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all countries
exports.findAll = async (req, res) => {
    try {
        const countries = await Country.findAll();
        res.status(200).json(countries);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single country by ID
exports.findOne = async (req, res) => {
    try {
        const country = await Country.findByPk(req.params.id);
        if (!country) {
            return res.status(404).json({ error: "Country not found" });
        }
        res.status(200).json(country);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a country by ID (from the image)
exports.update = async (req, res) => {
    try {
        const [updated] = await Country.update(req.body, {
            where: { id: req.params.id }
        });

        if (updated) {
            const updatedCountry = await Country.findByPk(req.params.id);
            res.status(200).json(updatedCountry);
        } else {
            res.status(404).json({ message: 'Country not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a country by ID
exports.delete = async (req, res) => {
    try {
        const country = await Country.findByPk(req.params.id);
        if (!country) {
            return res.status(404).json({ error: "Country not found" });
        }
        await country.destroy();
        res.status(200).json({ message: "Country deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
