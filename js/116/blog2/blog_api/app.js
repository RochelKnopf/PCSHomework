const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var session = require('express-session');

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

app.use(session({
  secret: 'secret',
  /*cookie: {
    maxAge: 20000
  }*/
  resave: false,
  saveUninitialized: false
}));

let posts;
app.use(async (req, res, next) => {
  await client.connect();
  posts = await client.db('blog').collection('posts');
  next();
});

/*app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});*/

app.use(require('cors')({
  origin: 'http://localhost:3000'
}));

app.route('/posts')
  .get(async (req, res, next) => {
    const thePosts = await posts.find().toArray();
    res.send(thePosts);
  })
  .post(async (req, res, next) => {
    req.body.author = 'Joe Biden';
    req.body.date = new Date();
    const result = await posts.insertOne(req.body);
    console.log(result);
    if (!result.insertedId) {
      return next('oops, couldnt insert post');
    }

    req.body.id = result.insertedId;
    res.status(201)
      //.location(...)
      .send(req.body);
  });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const error = new Error('No such endpoint');
  error.statusCode = 404;
  next(error);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.statusCode || 500)
    .send(err.message);
});

app.listen(8080);
