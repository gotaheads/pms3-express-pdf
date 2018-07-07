import {getAccessToken, getRefreshToken} from "../auth/getAuthenticated";
import {sendEmailWithContentAndLinks} from "./sendEmailWithContentAndLinks";
import {refreshToken} from "../auth/refreshToken";
import {PassportRequest} from "../auth/passports";
import R = require('ramda');
const { isNil, prop, path } = R;

export const sendEmail = async (req: PassportRequest): Promise<any> => {
  const year: number = +prop('year', req.query),
    landlordNumber: number = +prop('number', req.query),
    email = prop('email', req.query),
    name = prop('name', req.query),
    contactName = prop('contactName', req.query);
  const overviewLink:string = path(['body', 'overviewLink'], req);
  const content: string = path(['body', 'content'], req);

  console.log('sendEmail year: %s, landlordNumber: %s, ' +
    'email: %s, name: %s, contactName: %s',
    year, landlordNumber, email, name, contactName);

  const refreshed = await refreshToken(getRefreshToken(req), req);
  const sent = await sendEmailWithContentAndLinks(getAccessToken(refreshed),
    year,
    landlordNumber, email, name, contactName,
    overviewLink, content);
  return sent;
}
