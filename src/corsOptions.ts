import {allowedOrigins} from "./allowedOrigins";

const corsOptions = {
  origin: (origin: any, callback: Function) => {
    //console.log('cors origin: [%s], allowedOrigins: %j', origin, allowedOrigins, allowedOrigins.indexOf(origin))
    if(!origin) return callback(null, true);

    if(allowedOrigins.indexOf(origin) === -1 ){
      const msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      console.log('cors error: %s', msg)
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  },
    credentials: true
}

export { corsOptions }

// allow requests with no origin
// (like mobile apps or curl requests)
