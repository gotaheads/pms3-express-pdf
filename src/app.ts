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
import {index as graph} from './graph/index';
import {checkAuth} from './auth/app-check-auth';
import {corsOptions} from "./corsOptions";

import R = require('ramda');
const { prop, path } = R;

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

app.use('/graph', graph);

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err)
  }
  const statusCode = +prop('status',err);
  // console.error('errorHandler originalUrl: %s, status: %s, req.logOut: %s, req.session.destroy: %s',
  //   prop('originalUrl', req), statusCode,  req.logOut, req.session.destroy);
  console.error('errorHandler originalUrl: %s, status: %s, err: %j',
    prop('originalUrl', req), statusCode,  err);

  switch (statusCode) {
    case 401:

      var refresh = require('passport-oauth2-refresh');
      refresh.requestNewAccessToken('azure', 'some_refresh_token', (err:any, accessToken: string, refreshToken: string) => {
        // You have a new access token, store it in the user object,
        // or use it to make a new request.
        // `refreshToken` may or may not exist, depending on the strategy you are using.
        // You probably don't need it anyway, as according to the OAuth 2.0 spec,
        // it should be the same as the initial refresh token.
        console.log('errorHandler refreshToken: %s', refreshToken);
        req.user.accessToken = refreshToken;
      });

      // console.log(' req.logOut instanceof Function: %s', req.logOut instanceof Function);
      // if(!!req.logOut) {
      //   req.logOut();
      // }
      // console.log(' req.session.destroy instanceof Function: %s', req.session.destroy instanceof Function);
      // if(!!req.session.destroy) {
      //   req.session.destroy((_ => console.log('destroed the current session.')));
      // }
    default:

  }

  res.status(!!statusCode ? statusCode : 500)
  res.json({ error: err })
}

app.use(errorHandler)