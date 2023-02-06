const http = require('http');

http
  .createServer(function (req, res) {
    res.write('nodejs1111111111111111111111111111');
    res.end();
  })
  .listen(3366);