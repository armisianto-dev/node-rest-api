'use strict';

module.exports = function (app) {
  // Users
  var todoListUsers = require('./controller/users');

  app.route('/')
    .get(todoListUsers.index);

  app.route('/users')
    .get(todoListUsers.users);

  app.route('/users/:id')
    .get(todoListUsers.findUser);

  app.route('/users')
    .post(todoListUsers.insertUser);

  app.route('/users')
    .put(todoListUsers.updateUser);
};