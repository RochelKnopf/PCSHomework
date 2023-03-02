const app = require('connect')();

app.use((req, res, next) => {
    res.setHeader('content-type', 'text/html');
    next();
});

app.use(require('./queryParser.js'));

app.use('/index.html', (req, res, next) => {
    res.end(`${req.searchParams.get('magicWord')} ${'<h1>This is the index page</h1>'}`);
    next();
});

app.use('/about.html', (req, res, next) => {
    res.end(`${req.searchParams.get('magicWord')} ${'<h2>This is the about page</h2>'}`);
    next();
});

app.use((req, res, next) => {
    const error = new Error('404. page not found unless you say please');
    error.statusCode = 404;
    throw (error);
  });

app.listen(80);