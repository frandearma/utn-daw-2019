var app = angular.module('test');
app.controller('VerPalabraControlador', function($scope, VerPalabra, $routeParams){
    $scope.limit=10;
    $scope.palabra = $routeParams.palabra;
    $scope.VerPalabra = VerPalabra.query({id: $routeParams.id},function(respuesta){
        $scope.palabra = respuesta
        });
    $scope.data = [];
    //FILTRO SEARCH BY TAGS
   
});