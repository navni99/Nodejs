const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); //no need to parse manually now
app.use('/add-product', (req, res, next) => {
  console.log('In add-product');
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>'
  );
});
app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
app.use('/', (req, res, next) => {
  res.send('Hello from /');
});

app.listen(3000);
