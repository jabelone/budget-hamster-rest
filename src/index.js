import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import methodOverride from 'method-override';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './router';

dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const app = express();
const port = process.env.PORT || '3000';

app.use(morgan('combined'));

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(methodOverride('_method'));
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));

app.use(router());

function listen(expressApp = app, expressPort = port) {
  expressApp.listen(expressPort, () => {
    console.log(`Started server on port ${expressPort}!`);
  });
}

if (require.main === module) {
  listen();
}

export default app;
