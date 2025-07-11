const express = require('express');
const router = express.Router();
const { getMyProfile, updateMyProfile } = require('../controllers/userController');
const verifyToken = require('../middleware/auth');

router.get('/me', verifyToken, getMyProfile);
router.put('/me', verifyToken, updateMyProfile);

module.exports = router;
