require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const documentRoutes = require('./routes/documentRoutes');
const path = require('path');
const fs = require('fs');

// Create upload folder if it doesn't exist
if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use('/api/documents', documentRoutes);

sequelize.sync().then(() => {
  console.log('Document DB connected');
  app.listen(process.env.PORT || 4002, () =>
    console.log(`Document service running on port ${process.env.PORT || 4002}`)
  );
}).catch(err => console.error('DB Error:', err));
