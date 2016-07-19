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

  signUp: function (req, res) {
    var form = req.body;
    if (form) {
      User.create({name: form.name, auth: {username: form.username, password: form.password}}).then(function (user) {
        return res.send(user);
      }).catch(function (err) {
        return res.negotiate(err);
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

