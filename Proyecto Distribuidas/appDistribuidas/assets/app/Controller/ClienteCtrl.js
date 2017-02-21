/**
 * Created by julio_000 on 16/02/2017.
 */
aplicacion.controller('ClienteCtrl', [
  '$scope',
  '$http',

  function ($scope, $http) {

    $scope.nuevoCliente = {
      email: '',
      usuario: '',
      password: ''
    }
    $scope.clientes = [];

    $scope.crearCliente = function () {
      console.log('ingreso a la funcion')
      $http.post(masterUrl+'/UsuarioApi', $scope.nuevoCliente)
        .then(
          function success(data) {
            console.log(data);
            if ($scope.clienteForm) {
              $scope.clienteForm.$setPristine();
              $scope.clienteForm.$setUntouched();
            }
            $scope.nuevoCliente = {

              email: '',
              usuario: '',
              password: ''
            }

            $scope.clientes.push(data.data);
            toastr.success('Cuenta registrada exitosamente')
          },
          function error(err) {
            toastr.options.positionClass = 'toast-bottom-center'
            toastr.warning('Ya existe una cuenta con los datos ingresados')
            console.log(err);
          })

    }

  }]);
