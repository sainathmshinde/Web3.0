const http = require("http"); // or require('node:http') bot same thing

const server = http.createServer(function (req, res) {
  res.end("Hello World");
});

server.listen(8080);
