import * as request from "superagent";
import {createGraphUrl} from "./getGraphUrl";

const getSharingLink= (accessToken: string, id: string): Promise<string> => {
  //'https://graph.microsoft.com/beta/me/drive/items/' + id + '/createLink'`
  const url = createGraphUrl(`drive/items/${id}/createLink`);
  console.log('getSharingLink id: %s', id);
  return request
    .post(url)
    .send({ type: 'view' })
    .set('Authorization', 'Bearer ' + accessToken)
    .set('Content-Type', 'application/json')
    .then(res => res.body.link.webUrl);
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