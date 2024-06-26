//Routes.js
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController.js');
const verifyToken = require('../Middleware/verifyToken.js')


router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/forgot-password', userController.forgotPassword);
router.put('/reset-password', userController.resetPassword);
router.get('/verify-token/:token', userController.verifyToken);

// Protected route - example
router.get('/protected-route', verifyToken, (req, res) => {
    const user = req.user;
    res.json({ message: 'Access granted', user });
    console.log(user);
  });

module.exports = router;