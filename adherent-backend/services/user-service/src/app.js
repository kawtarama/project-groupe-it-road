require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
  console.log('User DB connected');
  app.listen(process.env.PORT || 4001, () =>
    console.log(`User service running on port ${process.env.PORT || 4001}`)
  );
}).catch(err => console.error('DB Error:', err));
