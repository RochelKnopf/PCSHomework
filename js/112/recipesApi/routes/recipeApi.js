var express = require('express');
var router = express.Router();
const pool = require('../pool.js');
const debug = require('debug')('contactsapi:contactsApiRouter');

router.route('/')
  .get(function (req, res, next) {
    debug('getting all contacts');
    pool.query(
      'SELECT * FROM recipes',
      (err, results, fields) => {
        if (err) {
          console.log(err);
          res.statusCode = 500;
          return res.end('Unable to load recipes');
        }
        res.send(results);
      });
  })
  .post(function (req, res, next) {
    console.log(req);
    pool.query(
      'INSERT INTO recipes(name) VALUES (?)', [req.body.name],
      (err, results, fields) => {
        console.log(results);

        if (err) {
          console.log(err);
          res.statusCode = 500;
          return res.end('Unable to add recipe');
        }

        req.body.id = results.insertId;

        //res.sendStatus(201);
        res.status(201)
          .location(`/${req.body.id}`)
          .send(req.body);
      });
  })
  .put(function (req, res, next) {
    console.log(req);
    pool.query(
      'UPDATE recipes SET name = (name) VALUES (?)', [req.body.name],
      (err, results, fields) => {
        console.log(results);

        if (err) {
          console.log(err);
          res.statusCode = 500;
          return res.end('Unable to update recipe');
        }

        req.body.id = results.insertId;

        //res.sendStatus(201);
        res.status(201)
          .location(`/${req.body.id}`)
          .send(req.body);
      });
  })
  .delete(function (req, res, next) {
    debug('getting all contacts');
    pool.query(
      'DELETE * FROM recipes',
      (err, results, fields) => {
        if (err) {
          console.log(err);
          res.statusCode = 500;
          return res.end('Unable to delete recipes');
        }
        res.send(results);
      });
  });

module.exports = router;