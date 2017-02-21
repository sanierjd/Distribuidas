/**
 * UsuarioApi.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email: {
      type: 'string',
      defaultsTo:'example@example.com'
      // unique: true,
    },
 usuario: {
      type: 'string',
      // unique: true,
      defaultsTo:'',

    },
    password: {
      type: 'string',
      defaultsTo:'123456'
      // unique: true,
    },
  }
};

