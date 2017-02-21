aplicacion.controller('DescargaCtrl', [
  '$scope',

  '$http',
  '$cookies',
  function ($scope, $http,$cookies) {
    $scope.logout = function(){
      console.log("llamo a logout")
      $cookies.remove('UsuarioId');
      // / $cookies.remove('UsuarioTipo');
      console.log('hizo logout')



    }
    $scope.busqueda='';
    $scope.libros = [];



      $http({
        method: 'GET',
        url: masterUrl+'/LibroApi'
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.libros=response.data;



        console.log('libors',$scope.libros)
      }, function errorCallback(response) {

        console.log('error',response)
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

















  }]);

//


/**
 * Created by julio_000 on 15/02/2017.
 */
