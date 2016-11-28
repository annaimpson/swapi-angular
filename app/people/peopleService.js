'use strict';

myApp.factory('personData', function($resource){
  var resource = $resource('http://swapi.co/api/people/:id', {id:'@id'},  {"getAll": {method: "GET", isArray: true}});
  return {
    getPerson: function(personId){
      return resource.get({id: personId});
    },
    save: function(person){
      person.id = 999;
      return resource.save(person);
    },
    getAllPeople: function(data){
      return resource.get(data);
    }
  };
});
