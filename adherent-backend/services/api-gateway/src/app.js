require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(process.env.PORT || 4003, () => {
  console.log(`API Gateway running on port ${process.env.PORT || 4003}`);
});
