require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
  console.log('Auth DB connected');
  app.listen(process.env.PORT || 4000, () =>
    console.log(`Auth service running on port ${process.env.PORT || 4000}`)
  );
}).catch(err => console.error('DB Error:', err));
