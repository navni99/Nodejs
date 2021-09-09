//We have products and routes now exported, so need to specify where importing

const express = require('express');
const path = require('path');
const router = express.Router();
const products = [];
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'htmlpages', 'add-product.html'));
});
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect('/');
});

module.exports = {
  routes: router,
  products: products,
};

//Major disadvantage of passing data like this is it is DATA INHERENT TO NODE SERVER, it will be same for different users across different requests, will update for all n show to all, Unlikely to need this.
