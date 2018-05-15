import * as request from "superagent";
import {baseGraphUrl} from "./getGraphUrl";

/**
 * Generates a GET request the user endpoint.
 * @param {string} accessToken The access token to send with the request.
 */
const getUserData = (accessToken: string) => {
  return request
    .get(baseGraphUrl)
    .set('Authorization', 'Bearer ' + accessToken)
  // .end((err, res) => {
  //   callback(err, res);
  // });
}

export {
  getUserData
}