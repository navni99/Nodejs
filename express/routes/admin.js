//same url for post and get behave differently
//add-product is internally now treated as /admin/add-product

const express = require('express');
const path = require('path');
// const { dirname } = require('path/posix');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  /*res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>'
  );*/
  //res.sendFile('../htmlpages/add-product.html');
  //this will not work because / join is not common across different os
  res.sendFile(path.join(__dirname, '../', 'htmlpages', 'add-product.html')); //__dirname gives dir name of current parent, we go up one dir n then navigate
});
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
