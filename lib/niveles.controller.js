var app = angular.module('test');
app.controller('NivelesControlador', function($scope, $http, $filter){
     //NIVELES
        $http.get('https://ls.villamaria.gob.ar/backend/niveles').then(function (respuestaNiveles){
        $scope.niveles = respuestaNiveles.data;
        });
	  $scope.mostrarCategorias = function(id){
        $http.get('https://ls.villamaria.gob.ar/backend/categorias').then(function (respuestaCategorias){
        $scope.categorias = respuestaCategorias.data;
        var categoriaFiltrada =  $scope.categorias.filter(function(categoria) {
            return categoria.nivel.id == id;
        });
        $scope.categorias = categoriaFiltrada;
        $scope.totalItems = $scope.categorias.length;
        //VALIDAR CANTIDAD
        if($scope.totalItems>0){
            swal("¡Excelente!", "Se encontraron "+$scope.totalItems+" categorias.", "success");
        }else{
            swal("Oppsss..", "No se encontraron categorias.", "error");
        }
        });
    };
});