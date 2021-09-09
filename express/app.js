const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); //no need to parse manually now
app.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>'
  );
});
app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
app.get('/', (req, res, next) => {
  res.send('Hello from /');
});

app.listen(3000);
