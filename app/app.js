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

  $routeProvider.when('/people-detail',
  {
    templateUrl: 'people-detail/people-detail.html'
  });

  $routeProvider.when('/planets',
  {
    templateUrl: 'planets/planets.html',
    controller: 'SwapiPlanetsController'
  });

  $routeProvider.when('/planets-detail',
  {
    templateUrl: 'planets-detail/planets-detail.html'
  });

  $routeProvider.when('/species',
  {
    templateUrl: 'species/species.html',
    controller: 'SwapiSpeciesController'
  });

  $routeProvider.when('/species-detail',
  {
    templateUrl: 'species-detail/species-detail.html'
  });


  $routeProvider.when('/films',
  {
    templateUrl: 'films/films.html',
    controller: 'SwapiFilmsController'
  });

  $routeProvider.when('/films-detail',
  {
    templateUrl: 'films-detail/films-detail.html'
  });

  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
