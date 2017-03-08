require('dotenv').config();

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import router from './router';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const app = express();
const port = process.env.PORT || '3000';

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(methodOverride('_method'));
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));

app.use(router());

app.use(morgan('combined'));

function listen(expressApp = app, expressPort = port) {
  expressApp.listen(expressPort, () => {
    console.log(`Started server on port ${expressPort}!`);
  });
}

if (require.main === module) {
  listen();
}

export default app;
