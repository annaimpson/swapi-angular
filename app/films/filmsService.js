'use strict';

myApp.factory('filmData', function($resource){
  var resource = $resource('http://swapi.co/api/films/:id', {id:'@id'},  {"getAll": {method: "GET", isArray: true}});
  return {
    getFilm: function(filmId){
      return resource.get({id: filmId});
    },
    getAllFilms: function(data){
      return resource.get(data);
    }
  };
});
