var fs = require('fs');

module.exports.get = function(reg,res){
  var people = fs.readFileSync('http://swapi.co/api/people/:id', 'utf8');
  res.send(people);
};

module.exports.save = function(reg, res){
  var people = reg.body;
  fs.writeFileSync('http://swapi.co/api/people/:id', JSON.stringify(people));
  res.send(people);
};

module.exports.getAll = function(reg, res){
  var path = 'http://swapi.co/api/people/';

  var files = [];
  try {
    files = fs.readdirSync(path);
  }
  catch(e){
    res.send('[]');
    res.end();
  }
  var results = "[";
  for (var idx = 0; idx < files.length; idx++){
    if (files[idx].indexOf(".json") == files[idx].length - 5){
      results += fs.readFileSync(path + "/" + files[idx]) + ",";
    }
  }
  results = results.substr(0, results.length - 1);
  results += "]";

  res.send(results);
  res.end();
};
