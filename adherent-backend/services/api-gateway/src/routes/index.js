const express = require('express');
const axios = require('axios');
const auth = require('../middleware/auth');
require('dotenv').config();

const router = express.Router();

// Auth microservice (public)
router.post('/auth/register', async (req, res) => {
  try {
    const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/api/auth/register`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { message: 'Auth error' });
  }
});

router.post('/auth/login', async (req, res) => {
  try {
    const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/api/auth/login`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { message: 'Auth error' });
  }
});

// User microservice (protected)
router.get('/users/me', auth, async (req, res) => {
  try {
    const response = await axios.get(`${process.env.USER_SERVICE_URL}/api/users/me`, {
      headers: { Authorization: req.headers['authorization'] }
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { message: 'User error' });
  }
});

router.put('/users/me', auth, async (req, res) => {
  try {
    const response = await axios.put(`${process.env.USER_SERVICE_URL}/api/users/me`, req.body, {
      headers: { Authorization: req.headers['authorization'] }
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { message: 'User update error' });
  }
});

// // Document microservice (protected)
// router.get('/documents', auth, async (req, res) => {
//   try {
//     const response = await axios.get(`${process.env.DOCUMENT_SERVICE_URL}/api/documents`, {
//       headers: { Authorization: req.headers['authorization'] }
//     });
//     res.json(response.data);
//   } catch (err) {
//     res.status(err.response?.status || 500).json(err.response?.data || { message: 'Document error' });
//   }
// });

router.get('/documents', auth, async (req, res) => {
  console.log("Authorization header reçu en gateway:", req.headers['authorization']);
  try {
    const response = await axios.get(`${process.env.DOCUMENT_SERVICE_URL}/api/documents`, {
      headers: { Authorization: req.headers['authorization'] }
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { message: 'Document error' });
  }
});


module.exports = router;
