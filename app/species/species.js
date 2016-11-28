'use strict';

myApp.controller('SwapiSpeciesController',
  function SwapiSpeciesController ($scope, $location, speciesData){
    $scope.species = speciesData.getAllSpecies();
    console.log($scope.species);
});
