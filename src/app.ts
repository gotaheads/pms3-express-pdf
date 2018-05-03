require('dotenv').config();

import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

import { passport } from './auth/passport';

// Routes
import { index as generators } from './generators/index';
import { index as auth } from './auth/index';

//import unless = require('express-unless');
import { checkAuth } from './auth/app-check-auth';
//checkAuth.unless = unless;

// Create Express server
export const app = express();

var allowedOrigins =
  [
    'http://localhost:9000',
    'https://pms.nakanoya.com.au'
  ];

app.use(cors({
  origin: (origin, callback) => {
    console.log('cors origin: [%s], allowedOrigins: %j', origin, allowedOrigins, allowedOrigins.indexOf(origin))
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);

    if(allowedOrigins.indexOf(origin) === -1 ){
      const msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  },
  credentials: true
}));
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

app.use('/auth', auth);