'use strict';

myApp.factory('planetData', function($resource){
  var resource = $resource('http://swapi.co/api/planets/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: true}});
  return {
    getPlanet: function(planetId){
      return resource.get({id: planetId});
    },
    getAllPlanets: function(data){
      return resource.get(data);
    }
  };
});
