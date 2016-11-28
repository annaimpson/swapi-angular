'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ngRoute', 'ngResource'])

.config(function($locationProvider, $routeProvider) {
  $routeProvider.when('/home',
  {
    templateUrl: 'home/home.html'
  });

  $routeProvider.when('/people',
  {
    templateUrl: 'people/people.html',
    controller: 'SwapiPeopleController'
  });

  $routeProvider.when('/person/:personId',
  {
    templateUrl: 'people/people-detail.html',
    controller: 'SwapiPeopleDetailController'
  });

  $routeProvider.when('/planets',
  {
    templateUrl: 'planets/planets.html',
    controller: 'SwapiPlanetsController'
  });

  $routeProvider.when('/planet/:planetId',
  {
    templateUrl: 'planets/planets-detail.html',
    controller: 'SwapiPlanetDetailController'
  });

  $routeProvider.when('/species',
  {
    templateUrl: 'species/species.html',
    controller: 'SwapiSpeciesController'
  });

  $routeProvider.when('/species/:speciesId',
  {
    templateUrl: 'species/species-detail.html',
    controller: 'SwapiSpeciesDetailController'
  });

  $routeProvider.when('/films',
  {
    templateUrl: 'films/films.html',
    controller: 'SwapiFilmsController'
  });

  $routeProvider.when('/film/:filmId',
  {
    templateUrl: 'films/films-detail.html',
    controller: 'SwapiFilmDetailController'
  });

  $locationProvider.hashPrefix('!');

  // $routeProvider.otherwise({redirectTo: '/home'});
});
