var app = angular.module('test');
app.controller('PalabrasControlador', function($scope, Palabras){
     $scope.cambiarPagina = function(newPageNumber) {
        getResultados(newPageNumber-1);
        $scope.pageno = newPageNumber;
        };
        //TODAS LAS PALABRAS
        $scope.palabras = Palabras.query({},function(respuesta){
                $scope.palabras = respuesta;
                $scope.total = respuesta.length;
                $scope.itemsPerPage = 6;
            });


    $scope.data = [];
    $scope.queryBy = 'tags';
    //FILTRO SEARCH BY TAGS
   
});