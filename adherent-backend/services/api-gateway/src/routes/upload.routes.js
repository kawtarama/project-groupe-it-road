const express = require('express');
const router = express.Router();
const { uploadMiddleware, uploadFile } = require('../controllers/upload.controller');
const { verifyToken } = require('../middleware/auth');

router.post('/upload', verifyToken, uploadMiddleware, uploadFile);

module.exports = router;
