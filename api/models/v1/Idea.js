/**
 * Idea.js
 *
 * @description :: Idea posted on IdeaMarket
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var uuid = require('uuid');
module.exports = {

  attributes: {
    access: {
      type: 'string',
      enum: ['public', 'protected', 'private']
    },
    businessModel: {
      type: "mediumtext"
    },
    comments: {
      collection: 'comment'
    },
    detail: {
      type: "mediumtext"
    },
    guid: {
      type: "string",
      uuidv4: true,
      primaryKey: true,
      unique: true,
      size: 30
    },
    ideator: {
      model: 'user'
    },
    similarApplications: {
      type: "array",
      item: "string"
    },
    status: {
      type: "string",
      enum: ['draft', 'published']
    },
    stat: {
      model: 'ideastat'
    },
    tags: {
      type: "array",
      item: "string"
    },
    title: {
      type: "string",
      size: 100
    }
  },

  beforeCreate: function (idea, callback) {
    if (!idea.guid) {
      idea.guid = uuid.v4();
    }
    callback();
  }
};

