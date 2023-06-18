var express = require('express');
var router = express.Router();
const pool = require('../pool.js');
const debug = require('debug')('contactsapi:contactsApiRouter');

router.route('/')
  .get(function (req, res, next) {
    debug('getting all contacts');
    pool.query(
      'SELECT * FROM contacts',
      (err, results, fields) => {
        if (err) {
          res.statusCode = 500;
          return res.end('Unable to load contacts');
        }
        res.send(results);
      });
  })
  .post(function (req, res, next) {
    const validationResult = contactSchema.validate(req.body, { abortEarly: false });
    console.log(validationResult);
    if (validationResult.error) {
      res.statusCode = 422;
      return res.end(validationResult.error.message);
    }

    pool.query(
      'INSERT INTO contacts(first, last, email, phone) VALUES (?,?,?,?)', [req.body.first, req.body.last, req.body.email, req.body.phone],
      (err, results, fields) => {
        console.log(results);

        if (err) {
          res.statusCode = 500;
          return res.end('Unable to add contact');
        }


        req.body.id = results.insertId;

        socket.emit('update', results);
        SocketIo.on('update', console.log('New Contact entered'), results => {
          console.log(results);
        });

        //res.sendStatus(201);
        res.status(201)
          .location(`${req.baseUrl}/${req.body.id}`)
          .send(req.body);
      });
  });

router.route('/:id')
  .get((req, res, next) => {
    debug(`getting contact ${req.params.id}`);

    pool.query(
      'SELECT * FROM contacts WHERE id = ?', [req.params.id],
      (err, results, fields) => {
        if (err) {
          res.statusCode = 500;
          return res.end('Unable to load contact');
        }

        if (!results.length) {
          //res.sendStatus(404);
          res.statusCode = 404;
          return res.end(`No such contact - ${req.params.id}`);
        }

        res.send(results[0]);
      });
  })
  .put((req, res, next) => {
    debug(`updating contact ${req.params.id}`);

    // added after class - use same validation we added on post for put
    const validationResult = contactSchema.validate(req.body, { abortEarly: false });
    console.log(validationResult);
    if (validationResult.error) {
      res.statusCode = 422;
      return res.end(validationResult.error.message);
    }

    pool.query(
      'UPDATE contacts SET first = ?, last = ?, email = ?, phone =? WHERE id = ?', [req.body.first, req.body.last, req.body.email, req.body.phone, req.params.id],
      (err, results, fields) => {
        if (err) {
          res.statusCode = 500;
          return res.end('Unable to update contact');
        }

        console.log(results);
        if (!results.affectedRows) {
          //res.sendStatus(404);
          res.statusCode = 404;
          return res.end(`No such contact - ${req.params.id}`);
        }

        /*if (!results.changedRows) {
          //res.sendStatus(304);
          res.statusCode = 304;
          return res.end(`No update performed - ${req.params.id}`);
        }*/

        socket.emit('update', results);
        SocketIo.on('update', console.log('Contact updated'), results => {
          console.log(results);
        });

        res.sendStatus(204);
      });
  })
  .delete((req, res, next) => {
    debug(`delete contact ${req.params.id}`);

    pool.query(
      'DELETE FROM contacts WHERE id = ?', [req.params.id],
      (err, results, fields) => {
        if (err) {
          res.statusCode = 500;
          return res.end('Unable to delete contact');
        }

        console.log(results);
        if (!results.affectedRows) {
          //res.sendStatus(404);
          res.statusCode = 404;
          return res.end(`No such contact - ${req.params.id}`);
        }

        socket.emit('update', results);
        SocketIo.on('update', console.log('Contact deleted'), results => {
          console.log(results);
        });

        res.sendStatus(204);
      });
  });

module.exports = router;
