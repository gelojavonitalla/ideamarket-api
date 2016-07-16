/**
 * Brand.js
 *
 * @description :: Existing brands i.e. Uber
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt : false,

  attributes: {
    id : {
      type: "integer",
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: "string"
    },
    officialName: {
      type: "string"
    },
    url: {
      type: "string"
    }
  }
};

