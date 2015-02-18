var http = require('http');

http.createServer(function(foo, bar) {
  console.log('200.');
  bar.writeHead(200);

  foo.on('readable', function() {
    console.log('Readable.');
    var chunk;
    while (null !== (chunk = foo.read())) {
      console.log('%d Bytes.', chunk.length);
      console.log(chunk.toString());
    }
  });

  foo.on('end', function() {
    console.log('End.');
    bar.end();
  });
}).listen(process.env.PORT);