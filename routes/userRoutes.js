const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { body, validationResult } = require('express-validator'); // For input validation

const router = express.Router();

// User Registration Route
router.post('/register', 
    // Input validation middleware
    body('username').isLength({ min: 3 }).withMessage('Username should be at least 3 characters long'),
    body('emailid').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    registerUser
);

// User Login Route
router.post('/login', 
    body('emailid').isEmail().withMessage('Invalid email format'),
    body('password').exists().withMessage('Password is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    loginUser
);

module.exports = router;
