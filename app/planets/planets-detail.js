'use strict';

myApp.controller('SwapiPlanetDetailController',
  function SwapiPlanetDetailController($scope, planetData, $routeParams){
    $scope.planet = planetData.getPlanet($routeParams.planetId);
    console.log($scope.planet);
  });
