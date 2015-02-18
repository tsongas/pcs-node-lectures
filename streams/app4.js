var fs = require('fs');

var input = fs.createReadStream('foo.txt');
var output = fs.createWriteStream('bar.txt');

input.pipe(output);
