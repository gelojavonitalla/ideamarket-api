/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var uuid = require('uuid');
module.exports = {
  autoCreatedAt: false,

  attributes: {
    auth: {
      model: 'auth'
    },
    id: {
      type: "string",
      uuidv4: true,
      primaryKey: true,
      unique: true,
      size: 30
    },
    name: {
      type: "string",
      required: true,
      size: 50
    },
    bio: {
      type: "string",
      size: 150
    },
    website: {
      type: "string",
      size: 150
    },
    stat: {
      model: 'userstat'
    }
  },

  beforeCreate: function (user, callback) {
    if (!user.id) {
      user.id = uuid.v4();
    }

    if (!user.stat) {
      UserStat.create({}).then(function(stat){
        user.stat = stat.id;
        callback();
      }).catch(callback);
    } else {
      callback();
    }
  }
};

