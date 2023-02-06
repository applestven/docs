const http = require('http');

http
  .createServer(function (req, res) {
    res.write('nodejs22222222222222222222222222');
    res.end();
  })
  .listen(3368);