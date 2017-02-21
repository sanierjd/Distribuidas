var aplicacion = angular.module('AppDistribuida',[
  'ui.router',
  'ui.bootstrap',
  'ngResource',
  'angularFileUpload',
  'xeditable',
  'ngAnimate',
  'ngCookies'
]);

aplicacion.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise("/inicio");


  $stateProvider
    .state('cliente', {
      url: "/registrarse",
      templateUrl: "Rutas/Cliente.html",
      controller:'ClienteCtrl',
      data: {
        nivelAcceso: 0,
        loginRequerido: false
      }
    })
    .state('login', {
    url: "/login",
    templateUrl: "Rutas/Login.html",
    controller:'LoginCtrl',
    data: {

      loginRequerido: false
    }
  })
    .state('inicio', {
      url: "/inicio",
      templateUrl: "Rutas/inicio.html",
      controller:'inicioCtrl',
      data: {

        loginRequerido: true
      }
    })
    .state('DescargarLibros', {
      url: "/download",
      templateUrl: "Rutas/DescargarLibros.html",
      controller:'DescargaCtrl',
      data: {

        loginRequerido: true
      }
    })
  ;


}]);

aplicacion.run(function ($rootScope, $cookies, $state)  {
  console.log('entro run');

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

    var requiereLogin = toState.data.loginRequerido;
    //var nivelAcceso = toState.data.nivelAcceso;

    if (requiereLogin) {
      console.log('Si require Login');
      if ($cookies.get('UsuarioId')) {
        console.log('hizo Login');

        //console.log(nivelAcceso);



      } else {
        console.log('No ha hecho Login');
        event.preventDefault();
        return $state.go('login')
      }
    } else {
      console.log('No requiere login');
    }

  });

});
