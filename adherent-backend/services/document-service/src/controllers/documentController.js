const Document = require('../models/Document');

exports.uploadDocument = async (req, res) => {
  try {
    const { title } = req.body;
    const filePath = req.file.path;
    const document = await Document.create({
      title,
      filePath,
      userId: req.user.id,
    });

    res.status(201).json(document);
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
};

exports.getMyDocuments = async (req, res) => {
  try {
    const documents = await Document.findAll({ where: { userId: req.user.id } });
    res.json(documents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
