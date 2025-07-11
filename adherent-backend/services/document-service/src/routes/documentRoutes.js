const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const { uploadDocument, getMyDocuments } = require('../controllers/documentController');

router.post('/', auth, upload.single('file'), uploadDocument);
router.get('/', auth, getMyDocuments);

module.exports = router;
