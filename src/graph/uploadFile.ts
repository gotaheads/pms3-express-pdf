import * as request from "superagent";
import {createGraphUrl} from "./getGraphUrl";


/**
 * Generates a PUT request to upload a file.
 * @param {string} accessToken The access token to send with the request.
 * @param {Function} callback
 //  */
const uploadFile= (accessToken: string, path: string, file: any, mimeType: string): Promise<object> => {
  // This operation only supports files up to 4MB in size.
  // To upload larger files, see `https://developer.microsoft.com/graph/docs/api-reference/v1.0/api/item_createUploadSession`.
  //`https://graph.microsoft.com/beta/me/drive/root/children/mypic.jpg/content`
  //https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/api/driveitem_put_content

  //https://graph.microsoft.com/beta/me/drive/root/2018/valuation-report-2018-806.pdf/content
  //https://graph.microsoft.com/beta/me//drive/root/2018/valuation-report-2018-813.pdf/content
  const url = createGraphUrl(`drive/root/${path}/content`);
  console.log('uploadFile path: %s, url: %s, file: %s, mimeType: %s', path, url, typeof file, mimeType)
  return request
    .put(url)
    .send(file)
    .set('Authorization', 'Bearer ' + accessToken)
    .set('Content-Type', 'mimeType')
    .then(res => res.body);
    // .end((err, res) => {
    //   // Returns 200 OK and the file metadata in the body.
    //   callback(err, res.body);
    // });
}

export {
  uploadFile,
}