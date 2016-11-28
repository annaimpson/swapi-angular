var people = require('./peopleController.js');
var myApp = express();
var bodyParser = require('body-parser');

myApp.use(bodyParser.urlencoded{(extended: true)});
myApp.use(bodyparser.json());

myApp.get('http://swapi.co/api/people/:id', people.results.get);
myApp.get('http://swapi.co/api/people/', people.results.getAll);

myApp.get('http://swapi.co/api/planets/:id', planets.results.get);
myApp.get('http://swapi.co/api/planets/', planets.results.getAll);

myApp.get('http://swapi.co/api/species/:id', species.results.get);
myApp.get('http://swapi.co/api/species/', species.results.getAll);

myApp.get('http://swapi.co/api/films/:id', films.results.get);
myApp.get('http://swapi.co/api/films/', films.results.getAll);
