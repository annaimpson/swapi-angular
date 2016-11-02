'use strict';

var app = angular.module('films', []);

app.controller('SwapiFilmsController', ['$http', function($http){
  var films = this;
  films.results = [ ];

  $http.get('http://swapi.co/api/films/').success(function(data){
    films.results = data.results;
    console.log(films.results);
  });
}]);
