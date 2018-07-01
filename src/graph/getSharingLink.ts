import * as request from "superagent";
import {createGraphUrl} from "./getGraphUrl";
import R = require('ramda');
const { prop, path } = R;

const getSharingLink= (accessToken: string, id: string): Promise<string> => {
  //'https://graph.microsoft.com/beta/me/drive/items/' + id + '/createLink'`
  const url = createGraphUrl(`drive/items/${id}/createLink`);
  console.log('getSharingLink id: %s', id);
  return request
    .post(url)
    .send({ type: 'view' })
    .set('Authorization', 'Bearer ' + accessToken)
    .set('Content-Type', 'application/json')
    .then(res => res.body.link.webUrl)
    .catch(err => {
      const status = prop('status',err);
      console.error('getSharingLink status: %s', status);
      switch (status) {
        case 401:
          return Promise.reject({err});
        default:
          return Promise.reject({err});
      }

    });
}

export {
  getSharingLink,
}
//
// function getSharingLink(accessToken, id, callback) {
//   request
//     .post('https://graph.microsoft.com/beta/me/drive/items/' + id + '/createLink')
//     .send({ type: 'view' })
//     .set('Authorization', 'Bearer ' + accessToken)
//     .set('Content-Type', 'application/json')
//     // .end((err, res) => {
//     //   // Returns 200 OK and the permission with the link in the body.
//     //   callback(err, res.body.link);
//     // });
// }