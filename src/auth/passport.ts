import * as passportAzureAd from 'passport-azure-ad';
const OIDCStrategy = passportAzureAd.OIDCStrategy;
import * as passport from 'passport';
import { creds } from './creds';
import * as uuid from 'uuid';

// **IMPORTANT
// Note that production apps will need to create a self-signed cert and use a secure server,
// and change dev settings marked 'For development only' in app.js and config.js.
// Below is an example after you have the key cert pair:
// const https = require('https');
// const certConfig = {
//  key: fs.readFileSync('./utils/cert/server.key', 'utf8'),
//  cert: fs.readFileSync('./utils/cert/server.crt', 'utf8')
// };
// const server = https.createServer(certConfig, app);

// authentication setup
const callback = (iss, sub, profile, accessToken, refreshToken, done) => {
  done(null, {
    profile,
    accessToken,
    refreshToken
  });
};

passport.use(new OIDCStrategy(creds, callback));

const users: any = {};
passport.serializeUser((user, done) => {
  const id: string = uuid.v4();
  users[id] = user;
  done(null, id);
});

passport.deserializeUser((id: string, done) => {
  const user = users[id];
  done(null, user);
});

export { passport }