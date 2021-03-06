import * as request from "superagent";
import {createGraphUrl} from "./getGraphUrl";
import {DriveItem} from "@microsoft/microsoft-graph-types";
import R = require('ramda');
const { prop, path } = R;

const uploadFile= (accessToken: string, path: string, file: any, mimeType: string): Promise<DriveItem> => {
  // This operation only supports files up to 4MB in size.
  // To upload larger files, see `https://developer.microsoft.com/graph/docs/api-reference/v1.0/api/item_createUploadSession`.
  //`https://graph.microsoft.com/beta/me/drive/root/children/mypic.jpg/content`
  //https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/driveitem_put_content

  const url = createGraphUrl(`drive/root/${path}/content`);
  console.log('uploadFile path: %s, url: %s, file: %s, mimeType: %s', path, url, typeof file, mimeType)

  return request
    .put(url)
    .send(file)
    .set('Authorization', 'Bearer ' + accessToken)
    .set('Content-Type', 'mimeType')
    .then(res => res.body)
    .catch(err => {
      const status = prop('status',err);
      console.error('uploadFile status: %s', status);
      switch (status) {
        case 401:
          return Promise.reject({err});
        default:
          return Promise.reject({err});
      }

    });
}

export {
  uploadFile,
}

// function uploadFile(accessToken, file, callback) {
//   // This operation only supports files up to 4MB in size.
//   // To upload larger files, see `https://developer.microsoft.com/graph/docs/api-reference/v1.0/api/item_createUploadSession`.
//   request
//     .put('https://graph.microsoft.com/beta/me/drive/root/children/mypic.jpg/content')
//     .send(file)
//     .set('Authorization', 'Bearer ' + accessToken)
//     .set('Content-Type', 'image/jpg')
//     .end((err, res) => {
//       // Returns 200 OK and the file metadata in the body.
//       callback(err, res.body);
//     });
// }
