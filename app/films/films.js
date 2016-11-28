'use strict';

myApp.controller('SwapiFilmsController',
  function SwapiFilmsController ($scope, $location, filmData){
    $scope.films = filmData.getAllFilms();
});
