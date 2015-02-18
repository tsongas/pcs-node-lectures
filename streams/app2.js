var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  console.log(request.headers)
  request.pipe(response);
}).listen(process.env.PORT);