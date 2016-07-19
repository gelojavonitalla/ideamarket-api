/**
 * Comment.js
 *
 * @description :: Idea comment. Introduced to cultivate interaction among members,
 * to provide feedback on an Idea and make it more stronger. Allow only 2 levels of comment.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    author: {
      model: 'user'
    },
    detail: {
      type: 'mediumtext'
    },
    id : {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    idea: {
      model: 'idea'
    },
    officialName: {
      type: 'string'
    },
    parent : {
      model: 'comment'
    },
    url: {
      type: 'string'
    }
  }
};

