'use strict';

var app = angular.module('planets', []);

app.controller('SwapiPlanetsController', ['$http', function($http){
  var planets = this;
  planets.results = [ ];

  $http.get('http://swapi.co/api/planets/').success(function(data){
    planets.results = data.results;
    console.log("list of planets:" + planets.results);
  });
}]);
