var Larry = function(text) {
  console.log('Larry: ' + text);
  Curly('Nyuk Nyuk Nyuk!');
};

var Moe = function(text) {
  console.log('Moe: ' + text);
  Curly('Oh, a wise guy, eh?');
};

var Curly = function(text) {
  console.log('Curly: ' + text);
};

exports.Larry = Larry;
exports.Moe = Moe;