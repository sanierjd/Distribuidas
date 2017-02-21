/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var jwt = require('jsonwebtoken');


module.exports = {
  emitirToken: function (req, res) {
    var token = jwt.sign({
        //        foo: 'bar'
        //aqui el token generar
      },



      'shhhhh'); //clave privada
    return res.json(token);
  },

  validarToken: function (req, res) {

    // verify a token symmetric - synchronous
    var decoded = jwt.verify(token, 'shhhhh');


    console.log(decoded.foo) // bar


    return
  },


  logIn: function (req, res) {
    var params = req.allParams();
    sails.log.info('Usuario: ', params.usuario, ' Password: ', params.password);
    if (params.usuario === undefined || params.password === undefined) {
      sails.log.warn('Envio incorrecto de parametros.');
      return res.badRequest('Envio incorrecto de parametros.');
    } else {
      UsuarioApi.findOne()
        .where({
          usuario: params.usuario
        })
        .exec(function (err, results) {
          if (err) return res.negotiate();

          if (results) {
            sails.log.info('Se encontro el usuario: ', results.usuario);
            if (params.password == results.password) {
              sails.log.info('Login correcto');
              var token = jwt.sign(results, 'shhhhh');
              var resultados = {
                user: results,
                token: token
              }
              return res.json(resultados);

            } else {
              sails.log.warn('Datos invalidos');
              return res.badRequest('Envio incorrecto de parametros.');
            }

          } else {
            sails.log.warn('No se encontro ese usuario');
            return res.badRequest('No se encontro ese usuario');
          }

        });
    }
  }
};
