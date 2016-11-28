'use strict';

myApp.controller('SwapiFilmDetailController',
  function SwapiFilmDetailController($scope, filmData, $routeParams){
    $scope.film = filmData.getFilm($routeParams.filmId);
  });
