const http = require('http');
const express = require('express');
const app = express();
app.use('/', (req, res, next) => {
  //use matches anything with / at begining , not / exactly, app.get or app.post matches url exactly
  console.log('This always runs');
  next(); // without next we dont move to the second app.use function
});
app.use('/add-product', (req, res, next) => {
  console.log('In add-product');
  res.send('add product'); //string becomes text/html type automatically
});
app.use('/', (req, res, next) => {
  // if it was placed before /add-product, add-product would return this and never reach In add product code, when using app.use order of mentioning requests matters because it doesnt match url exactly
  console.log('In second /');
  res.send('Hello from second /');
  // next(); // without next we dont move to the second app.use function
});

/*
const server = http.createServer(app);
server.listen(3000);
APP.LISTEN DOES BOTH THESE*/
app.listen(3000);
