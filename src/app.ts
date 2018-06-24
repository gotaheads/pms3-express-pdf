import {NextFunction, Response, Request} from "express";

require('dotenv').config();

import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

import {passport} from './auth/passport';
// Routes
import {index as generators} from './generators/index';
import {index as auth} from './auth/index';
import {index as email} from './email/index';
import {checkAuth} from './auth/app-check-auth';
import {corsOptions} from "./corsOptions";
//import unless = require('express-unless');
//checkAuth.unless = unless;

// Create Express server
export const app = express();
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(session({
  secret: '12345QWERTY20188-SECRET',
  name: 'graphNodeCookie',
  resave: false,
  saveUninitialized: false,
  //cookie: {secure: true} // For development only
}));
app.use(passport.initialize());
app.use(passport.session());

// Express configuration
app.set('port', process.env.PORT || 3000);

//.unless({ path: ['/auth']})
app.use('/generators', checkAuth);
app.use('/generators', generators);

//https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters
app.use(express.json());       // to support JSON-encoded bodies
//app.use(express.urlencoded()); // to support URL-encoded bodies
app.use('/email', checkAuth);
app.use('/email', email);

app.use('/auth', auth);

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.json({ error: err })
}

app.use(errorHandler)