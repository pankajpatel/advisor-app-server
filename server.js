const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const appMiddleware = require('./middlewares');

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/', async (req, res) => res.send('Hello World'));

app.use(appMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
