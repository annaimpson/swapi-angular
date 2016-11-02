'use strict';

var app = angular.module('people', []);

app.controller('SwapiPeopleController', ['$http', function($http){
  var people = this;
  people.results = [ ];

  $http.get('http://swapi.co/api/people/').success(function(data){
    people.results = data.results;
    console.log("list of people" + people.results);
  });
}]);
