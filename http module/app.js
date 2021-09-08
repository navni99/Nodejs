// GET request with parameters using http
//POST requests without parameters

const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const queryParams = url.parse(req.url, true).query;
  const queryPath = url.parse(req.url, true).pathname;

  if (queryParams && req.method === 'GET') {
    if (queryPath === '/country') {
      res.writeHead(200, 'Success');
      //read data from file, call function to find a match and set resoponse
      return fs.readFile('country.json', (err, fileData) => {
        const data = JSON.parse(fileData);
        const find = data.find((element) => {
          return element.Country === queryParams.Country;
        });
        find ? res.write(find.Capital) : res.writeHead(404, 'Not Found');
        res.end();
      });
    }
  } else if (req.method === 'POST') {
    if (req.url === '/') {
      res.writeHead(200, 'Success');
      res.write('Hello');
      res.end();
    } else if (req.url === '/nums') {
      res.writeHead(200, 'Success');
      res.write(JSON.stringify([1, 2, 3]));
      res.end();
    } else {
      res.writeHead(400, 'Failed');
      res.end();
    }
  } else {
    res.writeHead(400, 'Failed');
    res.end();
  }
});
server.listen(3000);
