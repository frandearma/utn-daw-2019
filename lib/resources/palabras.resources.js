var app = angular.module('test');
app.factory('Palabras', function($resource){
var Palabras  = $resource('https://ls.villamaria.gob.ar/backend/palabras',{}, 
{
    query:{method:'GET',params:{},isArray:true}
});
return Palabras;
});