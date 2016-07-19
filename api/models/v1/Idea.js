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
      enum: ['public', 'protected', 'private'],
      defaultsTo: 'public'
    },
    comments: {
      collection: 'comment'
    },
    detail: {
      type: "mediumtext",
      required: true
    },
    id: {
      type: 'string',
      uuidv4: true,
      primaryKey: true,
      unique: true,
      size: 30
    },
    ideator: {
      model: 'user',
      required: true
    },
    similarApplications: {
      type: "array"
    },
    status: {
      type: 'string',
      enum: ['draft', 'published'],
      defaultsTo: 'draft'
    },
    stat: {
      model: 'ideastat'
    },
    tags: {
      type: "array"
    },
    title: {
      type: "string",
      size: 100,
      required: true
    }
  },

  beforeCreate: function (idea, callback) {
    if (!idea.id) {
      idea.id = uuid.v4();
    }

    if (!idea.stat) {
      IdeaStat.create({}).then(function(stat){
        idea.stat = stat.id;
        callback();
      }).catch(callback);
    } else {
      callback();
    }
  }
};

