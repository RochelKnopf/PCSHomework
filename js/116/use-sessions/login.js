const pool = require('./pool.js');
const bcrypt = require('bcrypt');

module.exports = (req, res, next) => {
  //if (req.body.username === 'joe' && req.body.password === '123') {
  //pool.query('SELECT 1 FROM users WHERE name = ? and password = ?', [req.body.username, req.body.password], (err, results) => {
  pool.query('SELECT password FROM users WHERE name = ?', [req.body.username], (err, results) => {
    if (err) {
      return next(err);
    }

    if (!results.length) {
      return res.redirect('/');
    }

    //console.log(results[0]);
    bcrypt.compare(req.body.password, results[0].password, (err, result) => {
      if (err) {
        return next(err);
      }
      if (result) {
        req.session.user = req.body.username;
        return res.redirect('/admin');
      }

      return res.redirect('/');
    });
  });
};
