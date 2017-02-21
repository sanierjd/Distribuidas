/**
 * LibrosController
 *
 * @description :: Server-side logic for managing Libros
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  subir: function (req, res) {
    //metodo para recibir como argumento con el metodo post de nuestro form

    req.file('libro').upload({
      //directorio donde se guarda nuestra factura subida y tamanio permitido
      dirname: require('path').resolve(sails.config.appPath, 'assets/LibrosSubidos'),
      maxBytes: 10000000, saveAs: req.file('libro')._files[0].stream.filename
    }, function (err, uploadedFiles) {
      //res.set("Content-disposition", "attachment; filename='" + file.name + "'");


      if (err) return res.negotiate(err);


      //hasta aqui



      var aux = uploadedFiles[0].fd;
      console.log('aux',aux)
      var nombreArchivo = aux.split("/")
      console.log('nombre archivo',nombreArchivo)

      LibroApi.create({nombre:nombreArchivo[nombreArchivo.length-1]}).exec(function (err, finn){
        if (err) { return res.serverError(err); }

        sails.log('Finn\'s id is:', finn.id);
        return res.ok();
      });






    });


  },

};

