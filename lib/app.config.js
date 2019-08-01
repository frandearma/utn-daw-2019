var app = angular.module('test');
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      controller: 'PrincipalControlador',
      templateUrl : "pages/inicio.html"
    })
    .when("/palabras", {
      controller: 'PalabrasControlador',
      templateUrl : "pages/palabras.html"
    })
   .when("/palabras-categoria/:categoria", {
    controller: 'PalabrasCategoriaControlador',
    templateUrl : "pages/palabras-categoria.html"
  })
    .when("/ver-palabra/:id", {
      controller: 'VerPalabraControlador',
      templateUrl : "pages/ver-palabra.html"
    })
    .when("/categorias", {
      controller: 'CategoriasControlador',
      templateUrl : "pages/categorias.html"
    })
    .when("/niveles", {
      controller: 'NivelesControlador',
      templateUrl : "pages/niveles.html"
    })
    .otherwise({
      redirectTo: "/"
    })
  });