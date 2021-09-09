const http = require('http');
const express = require('express');
const app = express();
app.use((req, res, next) => {
  console.log('In middlewear');
  next(); // without next we dont move to the second app.use function
});
app.use((req, res, next) => {
  console.log('In second middlewear');
  res.send('I am type any'); //string becomes text/html type automatically
});

/*
const server = http.createServer(app);
server.listen(3000);
APP.LISTEN DOES BOTH THESE*/
app.listen(3000);
