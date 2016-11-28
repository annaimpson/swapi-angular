'use strict';

// clears the forms when 'cancel' is hit

function myFunction(){
  document.getElementById("reviewForm").reset();
}

myApp.controller('SwapiPeopleDetailController',

  function SwapiPeopleDetailController($scope, personData, $routeParams){
    $scope.person = personData.getPerson($routeParams.personId);
    console.log($scope.person);
    console.log($routeParams.personId);
  });
