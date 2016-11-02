'use strict';

var app = angular.module('species', []);

app.controller('SwapiSpeciesController', ['$http', function($http){
  var species = this;
  species.results = [ ];

  $http.get('http://swapi.co/api/species/').success(function(data){
    species.results = data.results;
    console.log(species.results);
  });
}]);
