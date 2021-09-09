const express = require('express');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
  console.log('title taken from admin add product', adminData.products);
  res.send('Hello from /');
});

module.exports = router;
