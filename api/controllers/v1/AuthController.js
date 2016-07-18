/**
 * AuthController
 *
 * @description :: Server-side logic for managing Authentication
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  _config: {
    model: 'auth',
    rest: false,
    actions: false,
    pluralize: false
  },

  create: function (req, res) {
    if (req.body) {
      Auth.create(req.body).then(function(auth){
        return res.send(auth);
      }).catch(function(err){
        return res.serverError(err);
      });
    } else {
      return res.badRequest("Missing request body");
    }
  },

  login: function (req, res) {
    //TODO
    return res.ok();
  },

  changePassword: function (req, res) {
    //TODO
    return res.ok();
  }
};

