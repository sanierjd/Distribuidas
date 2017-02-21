aplicacion.controller('LoginCtrl', [
  '$scope',
  '$rootScope',
  '$http',
  '$state',
  '$cookies',
  function ($scope,$rootScope, $http ,$state,$cookies) {

    $scope.user = {
      usuario: '',
      password: ''
    }
    $scope.login = function () {

      $http({
        method: 'POST',
        url: '/Auth/login',
        data: {
          usuario: $scope.user.usuario,
          password: $scope.user.password
        }
      }).then(
        function (respuesta) {



          console.log('esta es la respuesta al dar login'+respuesta.data.user)
          $cookies.put('UsuarioId', respuesta.data.user.id);
          //$cookies.put('UsuarioTipo', respuesta.data.user.nivelAcceso);
          toastr.success("Bienvenido "+respuesta.data.user.usuario)

          console.log(respuesta.data.user);
        },
        function (error) {
          toastr.error('Credenciales incorrectas')
          console.log(error);
        }


      );
    }

  }]);
