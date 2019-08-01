var app = angular.module('test');
app.controller('PalabrasCategoriaControlador', function($scope,PalabrasCategoria, $routeParams){
     $scope.cambiarPagina = function(newPageNumber) {
        getResultados(newPageNumber-1);
        $scope.pageno = newPageNumber;
        };
    //FUNCION PARA PALABRAS POR CATEGORIA
    function getResultados(pag) {
        $scope.palabrasCategoria = PalabrasCategoria.query({categoriaID: $routeParams.categoria,page: pag},function(respuesta){
        });
        $scope.palabrasCategoria.$promise.then(function (result) {
            $scope.palabras = result.content;
            $scope.total = result.totalElements;
            $scope.itemsPerPage = result.numberOfElements;
            $scope.categoria = $routeParams.categoria;
        });
    }     
    getResultados(0);
    $scope.data = [];
    $scope.queryBy = 'tags';
    //FILTRO SEARCH BY TAGS
   
});