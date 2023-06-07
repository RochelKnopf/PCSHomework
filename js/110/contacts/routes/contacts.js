var express = require('express');
var router = express.Router();

// will come from db eventually
let contacts = [
  { id: 1, first: 'Joe', last: 'Biden', email: 'jbiden@whitehouse.gov', phone: '1234567890' },
  { id: 2, first: 'Kamala', last: 'Harris', email: 'kharris@whitehouse.gov', phone: '9876543210' }
];

let nextId = contacts.length + 1;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Contacts',
    contacts,
    noContacts: contacts.length === 0,
    partials: { content: 'contacts' }
  });
});

router.get('/addContact', function (req, res, next) {
  res.render('layout', {
    title: 'Add Contact',
    partials: { content: 'addContact' }
  });
});

router.post('/addContact', function (req, res, next) {
  //console.log('would add contact here', req.body);
  //res.send('would add contact here');
  req.body.id = nextId++;
  contacts.push(req.body);
  res.writeHead(301, {location: '/contacts'});
  res.end();
});

router.get('/editContact/:id', function (req, res, next) {
  // Find the contact with the specified id
  const contact = contacts.find(c => c.id === +req.params.id);
  
  if (!contact) {
    // Contact not found
    res.sendStatus(404);
    return;
  }

  res.render('layout', {
    title: 'Edit Contact',
    contact,
    partials: { content: 'editContact' }
  });
});

router.post('/editContact/:id', function (req, res, next) {
  // Find the contact with the specified id
  const contactIndex = contacts.findIndex(c => c.id === +req.params.id);
  
  if (contactIndex === -1) {
    // Contact not found
    res.sendStatus(404);
    return;
  }
  
  // Update the contact with the new data
  contacts[contactIndex] = {
    ...contacts[contactIndex],
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    phone: req.body.phone
  };

  res.writeHead(301, { location: '/contacts' });
  res.end();
});

router.get('/deleteContact/:id', function (req, res, next) {
  contacts = contacts.filter(c => c.id !== +req.params.id);
  res.writeHead(301, { location: '/contacts' });
  res.end();
});

module.exports = router;
