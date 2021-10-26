let http = require('http');
let path = require('path');
let fs = require('fs');
let port = 8080;

let server = http.createServer(handleRequest);
server.listen(port);

console.log(`Server started on port ${port}`);

function handleRequest(req, res) {
  
  let pathname = req.url;
  console.log(req.url);
  if (pathname == "/") {
      pathname = "/public/index.html";
  } else {
      pathname = "/public/" + req.url;
  }
  
  // Callback function for 'readfile' 
  function response(err, data) {
     // case error
     if (err) {
      res.writeHead(500);
      return res.end('Error loading ' + pathname);
    }
    res.writeHead(200);
    res.end(data);
  }

  fs.readFile(__dirname + pathname, response);
}