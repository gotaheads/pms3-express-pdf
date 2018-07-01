import * as request from "superagent";
import {createGraphUrl} from "./getGraphUrl";
import R = require('ramda');
const { prop, path } = R;

const sendMail= (accessToken: string, message: string): Promise<string> => {
  const url = createGraphUrl(`sendMail`);
  console.log('sendMail');
  return request
    .post(url)
    .send(message)
    .set('Authorization', 'Bearer ' + accessToken)
    .set('Content-Type', 'application/json')
    .set('Content-Length', message.length.toString())
    .then(res => res.body)
    .catch(err => {
      const status = prop('status',err);
      console.error('sendMail status: %s, err: %j', status, err);

      switch (status) {
        case 401:
          return Promise.reject({err});
        default:
          return Promise.reject({err});
      }

    });
}

export {
  sendMail,
}

// function postSendMail(accessToken, message, callback) {
//   request
//     .post('https://graph.microsoft.com/beta/me/sendMail')
//     .send(message)
//     .set('Authorization', 'Bearer ' + accessToken)
//     .set('Content-Type', 'application/json')
//     .set('Content-Length', message.length)
//     .end((err, res) => {
//       // Returns 202 if successful.
//       // Note: If you receive a 500 - Internal Server Error
//       // while using a Microsoft account (outlook.com, hotmail.com or live.com),
//       // it's possible that your account has not been migrated to support this flow.
//       // Check the inner error object for code 'ErrorInternalServerTransientError'.
//       // You can try using a newly created Microsoft account or contact support.
//       callback(err, res);
//     });
// }
