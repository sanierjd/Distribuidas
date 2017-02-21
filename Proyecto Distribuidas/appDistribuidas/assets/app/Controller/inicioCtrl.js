aplicacion.controller('inicioCtrl', [
  '$scope',
'FileUploader',
  '$http',
  '$cookies',
  function ($scope,FileUploader, $http,$cookies) {

    $scope.logout = function(){
      console.log("llamo a logout")
      $cookies.remove('UsuarioId');
     // / $cookies.remove('UsuarioTipo');
      console.log('hizo logout')



    }
    var uploader = $scope.uploader = new FileUploader({
      url: masterUrl+'/Libros/subir',
      alias: 'libro'
    });

    // FILTERS

    uploader.filters.push({
      name: 'customFilter',
      fn: function (item /*{File|FileLikeObject}*/ , options) {
        return this.queue.length < 10;
      }
    });

    // CALLBACKS

    uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/ , filter, options) {
      console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function (fileItem) {
      console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function (addedFileItems) {
      console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function (item) {
      console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function (fileItem, progress) {
      console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function (progress) {
      console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function (fileItem, response, status, headers) {
      toastr.success('Libro cargado con exito');
      console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function (fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
      toastr.error("Ya existe el mismo libro")

    };
    uploader.onCancelItem = function (fileItem, response, status, headers) {
      console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function (fileItem, response, status, headers) {
      console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function () {
      toastr("Libros cargados con exito")
      console.info('onCompleteAll');
    };



    //Formulario CREATE


    console.info('uploader', uploader);
  }]);

