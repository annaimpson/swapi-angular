'use strict';

myApp.factory('speciesData', function($resource){
  var resource = $resource('http://swapi.co/api/species/:id', {id:'@id'},  {"getAll": {method: "GET", isArray: true}});
  return {
    getSpecies: function(speciesId){
      return resource.get({id: speciesId});
    },
    getAllSpecies: function(data){
      return resource.get(data);
    }
  };
});
