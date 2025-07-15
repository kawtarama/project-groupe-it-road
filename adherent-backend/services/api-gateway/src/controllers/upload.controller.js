const multer = require('multer');
const path = require('path');
const axios = require('axios');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: './services/api-gateway/uploads/',
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

exports.uploadMiddleware = upload.single('file');

exports.uploadFile = async (req, res) => {
  try {
    const user = req.user;
    const file = req.file;

    if (!file) return res.status(400).json({ error: 'Aucun fichier reçu.' });

    const payload = {
      name: file.originalname,
      file_url: `/uploads/${file.filename}`,
      adherant_id: user.id
    };

    // Envoie vers document-service (si existe) ou insertion ici
    const response = await axios.post(
      'http://localhost:5002/documents',
      payload,
      { headers: { Authorization: req.headers.authorization } }
    );

    res.status(201).json({ message: 'Fichier uploadé et enregistré.', data: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
};
