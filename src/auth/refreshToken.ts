import * as request from "superagent";
import R = require('ramda');
const { prop, path } = R;
import { creds } from './creds';
import {PassportRequest} from "./passports";

//https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols-oauth-code#refresh-the-access-token
const refreshToken= (refreshToken: string, req: PassportRequest): Promise<any> => {
  console.log('refreshToken refreshToken: %s', refreshToken);
//   POST /{tenant}/oauth2/v2.0/token HTTP/1.1
//   Host: https://login.microsoftonline.com
//     Content-Type: application/x-www-form-urlencoded
//
//   client_id=6731de76-14a6-49ae-97bc-6eba6914391e
//   &scope=https%3A%2F%2Fgraph.microsoft.com%2Fmail.read
//   &refresh_token=OAAABAAAAiL9Kn2Z27UubvWFPbm0gLWQJVzCTE9UkP3pSx1aXxUjq...
// &redirect_uri=http%3A%2F%2Flocalhost%2Fmyapp%2F
//   &grant_type=refresh_token
//   &client_secret=JqQX2PNo9bpM0uEihUPzyrh

  const url = 'https://login.microsoftonline.com/common/oauth2/token';
  const param = {
    grant_type : 'refresh_token',
    redirect_uri : creds.redirectUrl,
    client_id: creds.clientID,
    client_secret: creds.clientSecret,
    scope: creds.scope,
    refresh_token: refreshToken,
    tenant: 'common'
  }

  console.log('refreshToken id: %s');
  return request
    .post(url)
    .type('form')
    .send({grant_type : 'refresh_token'})
    .send({redirect_uri : creds.redirectUrl})
    .send({client_id : creds.clientID})
    .send({client_secret : creds.clientSecret})
    .send({scope : creds.scope})
    .send({refresh_token : refreshToken})
    .send({tenant : 'common'})
    .then(res => {
      const body = res.body;
      console.log(body)
      req.user.accessToken = body.access_token;
      req.user.refreshToken = body.refresh_token;
      return body;
    })
    .catch(err => {
      const status = prop('status',err);
      console.error('refreshToken status: %s', status);
      return Promise.reject({err});
    });
}

export {
  refreshToken,
}
