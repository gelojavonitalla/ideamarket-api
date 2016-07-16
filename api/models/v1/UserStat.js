/**
 * UserStat.js
 *
 * @description :: Useful information before viewing a new idea. If the views and likes are small, viewers can check the ideators statistics before deciding to past or continue viewing the idea.
 * stat is updated every time an update on idea is performed.
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
    reputation: {
      type: "integer",
      defaultsTo: 0
    },
    ideas: {
      type: "integer",
      defaultsTo: 0
    }
  }
};

