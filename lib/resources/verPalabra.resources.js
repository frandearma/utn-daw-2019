var app = angular.module('test');
app.factory('VerPalabra', function($resource){

var VerPalabra  = $resource('https://ls.villamaria.gob.ar/backend/palabras/:id',{}, 
{
    query:{method:'GET',params:{id:''},isArray:false}
});
return VerPalabra;
});