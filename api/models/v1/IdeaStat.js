/**
 * Stat.js
 *
 * @description :: Idea statistics. Useful statistics to aid users when selecting ideas to view.
 * Users are expected to view ideas with high views and likes.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt : false,
  autoUpdatedAt : false,

  attributes: {
    id: {
      type: "integer",
      primaryKey: true,
      autoIncrement: true
    },
    likes: {
      collection: 'user'
    },
    userViews: {
      collection: 'user'
    },
    views: {
      type: "integer",
      defaultsTo: 0
    },
    points: {
      type: "integer",
      defaultsTo: 0
    }
  }
};

