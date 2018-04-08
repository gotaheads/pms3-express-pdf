import * as request from 'superagent';

/**
 * Generates a GET request the user endpoint.
 * @param {string} accessToken The access token to send with the request.
 */
const getUserData = (accessToken: string) => {
  return request
    .get('https://graph.microsoft.com/beta/me')
    .set('Authorization', 'Bearer ' + accessToken)
    // .end((err, res) => {
    //   callback(err, res);
    // });
}

export { getUserData }
