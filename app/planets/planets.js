'use strict';

myApp.controller('SwapiPlanetsController',
  function SwapiPlanetsController ($scope, $location, planetData){
    $scope.planets = planetData.getAllPlanets();
    console.log($scope.planets);
  });
