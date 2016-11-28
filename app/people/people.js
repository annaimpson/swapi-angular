'use strict';

myApp.controller('SwapiPeopleController',
  function SwapiPeopleController ($scope, $location, personData){
    $scope.people = personData.getAllPeople();
    console.log($scope.people);
    console.log(personData.getPerson);
    console.log(personData);
});
