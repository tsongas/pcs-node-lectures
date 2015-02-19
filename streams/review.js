// run with curl -s --upload-file big.pdf localhost:8080

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  var size = request.headers['content-length'];
  var uploaded = 0;

  request.on('readable', function() {
    var chunk;
    while (null !== (chunk = request.read())) {
      uploaded += chunk.length;
      var percent = uploaded / size * 100;
      response.write(parseInt(percent, 10) + '%\n');
    }
  });

  request.pipe(fs.createWriteStream('big_copy.pdf'));
  
  request.on('end', function() {
    response.end();
  });
}).listen(process.env.PORT);