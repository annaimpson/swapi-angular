'use strict';

myApp.controller('SwapiSpeciesDetailController',
  function SwapiSpeciesDetailController($scope, speciesData, $routeParams){
    $scope.species = speciesData.getSpecies($routeParams.speciesId);
  });
