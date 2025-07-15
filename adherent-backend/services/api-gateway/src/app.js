const express = require('express');
const cors = require('cors');
const path = require('path'); // 🟢 ضروري هذا

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// static folder pour accéder aux fichiers uploadés
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// ✅ routes
app.use('/api', require('./routes/upload.routes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ API Gateway running on http://localhost:${PORT}`);
});
