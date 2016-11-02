'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute', 'people', 'planets', 'species', 'films']).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.when('/home',
  {
    templateUrl: 'home/home.html'
    // controller: 'SwapiFilmsController'
  });


  $routeProvider.when('/people',
  {
    templateUrl: 'people/people.html',
    controller: 'SwapiPeopleController'
  });

  $routeProvider.when('/planets',
  {
    templateUrl: 'planets/planets.html',
    controller: 'SwapiPlanetsController'
  });

  $routeProvider.when('/species',
  {
    templateUrl: 'species/species.html',
    controller: 'SwapiSpeciesController'
  });

  $routeProvider.when('/films',
  {
    templateUrl: 'films/films.html',
    controller: 'SwapiFilmsController'
  });

  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
