/**
 * Idea.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var uuid = require('uuid');
module.exports = {

  attributes: {
    guid: {
      type: "string",
      uuidv4: true,
      primaryKey: true,
      unique: true,
      size: 30
    },
    ideaStat: {
      model: 'ideastat'
    },
    ideator: {
      model: 'user'
    },
    dateCreated: {
      type: 'datetime'
    },
    access: {
      type: 'string',
      enum: ['public', 'private', 'protected']
    },
    title: {
      type: "string",
      size: 100
    },
    businessModel: {
      type: "mediumtext"
    },
    detail: {
      type: "mediumtext"
    },
    tags: {
      type: "array",
      item: "string"
    },
    similarApplications: {
      type: "array",
      item: "string"
    }
  },

  beforeCreate: function (idea, callback) {
    if (!idea.guid) {
      idea.guid = uuid.v4();
    }
    callback();
  }
};

