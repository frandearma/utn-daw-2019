var app = angular.module('test');
app.factory('Categorias', function($resource){
var Categorias  = $resource('https://ls.villamaria.gob.ar/backend/categorias');
return Categorias;
});