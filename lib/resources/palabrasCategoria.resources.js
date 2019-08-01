var app = angular.module('test');
app.factory('PalabrasCategoria', function($resource){

var PalabrasCategoria  = $resource('https://ls.villamaria.gob.ar/backend/categorias/:categoriaID/palabras',{}, 
{
    query:{method:'GET',params:{categoriaID:''},isArray:false}
});
return PalabrasCategoria;
});