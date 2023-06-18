const pool = require('./pool.js');
const bcrypt = require('bcrypt');

module.exports = (req, res, next) => {
  if (! req.body.username || ! req.body.password) {
    return next(new Error('username and password are required'));
  }

  bcrypt.hash(req.body.password, 10,  (err, hash) => {
    if (err) {
      return next(err);
    }

    pool.query('INSERT INTO users(name, password) VALUES(?,?)', [req.body.username, hash], (err, results) => {
      if (err) {
        if (err.errno === 1062) {
          err = new Error('Username already taken. Please pick another.');
          err.statusCode = 409;
        }
        return next(err);
      }

      res.redirect('/');
    });
  });
};
