var app = angular.module('test');
app.controller('CategoriasControlador', function($scope, Categorias){
    $scope.categorias = Categorias.query(function(respuesta){
    });
});