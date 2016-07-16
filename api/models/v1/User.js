/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var uuid = require('uuid');
module.exports = {
  autoCreatedAt : false,
  
  attributes: {
    guid : {
      type: "string",
      uuidv4: true,
      primaryKey: true,
      unique: true,
      size: 30
    },
    name: {
      type: "string"
    },
    auth: {
      model: 'authentication'
    },
    stat: {
      model: 'userstat'
    }
  }
};

