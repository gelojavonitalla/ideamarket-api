/**
 * Authentication.js
 *
 * @description :: Information to be used for user authentication
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: 'string',
      unique: true,
      size: 100
    },
    user: {
      model: 'user'
    },
    password: {
      type: 'string',
      size: 100
    },

    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  }
};

