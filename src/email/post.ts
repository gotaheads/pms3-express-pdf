import {Response} from "express";
import * as asyncHandler from 'express-async-handler';
import {getAccessToken, getRefreshToken, isAuthenticated} from "../auth/getAuthenticated";
import {PassportRequest} from "../auth/passports";
import R = require('ramda');
import {sendEmailWithContentAndLinks} from "./sendEmailWithContentAndLinks";
import {refreshToken} from "../auth/refreshToken";

const post = asyncHandler(async (req: PassportRequest, res: Response) => {
  try {
    const sent = await sendEmail(req);
    res.json(sent);
  }catch (err){
    const statusCode = +path(['header', 'status'],err);
    const header = +path(['header'],err);
    console.error('send email failed, status: %s, err: %j',
      statusCode,  err);
    switch (statusCode) {
      case 504:
      default:
        console.log('retry...');
        const sent = await sendEmail(req);
        res.json(sent);
    }

  }
});
const { isNil, prop, path } = R;

async function sendEmail(req: PassportRequest) {
  const year: number = +prop('year', req.query),
    landlordNumber: number = +prop('number', req.query),
    email = prop('email', req.query),
    name = prop('name', req.query),
    contactName = prop('contactName', req.query);
  const overviewLink = path(['body', 'overviewLink'], req);
  const content = path(['body', 'content'], req);

  console.log('sendEmail user: %s, year: %s, landlordNumber: %s, ' +
    'email: %s, name: %s, contactName: %s, body: %j',
    isAuthenticated(req), req.user, year, landlordNumber, email, name, contactName, prop('body', req));

  const refreshed = await refreshToken(getRefreshToken(req), req);
  const sent = await sendEmailWithContentAndLinks(getAccessToken(refreshed),
    year,
    landlordNumber, email, name, contactName,
    overviewLink, content);
  return sent;
}


export { post }

//'valuations@portfolioms.com.au'
// const overviewLink = 'https://portfolioms-my.sharepoint.com/:b:/g/personal/valuations_portfolioms_com_au/EectJUKYt9tGs3kXhoXgPUUB_uGxo9wFqkHSHQhcHbMPdA?e=dgTE4C';
// const content = `Please click below and download market overview and your portfolio's market appraisal for the financial year ending June 30, 2017.
//
//                  Due to client feedback, we are delivering these to you via emails. Should you prefer a hard copy of your appraisal, we will be happy to send it out in the same manner as previous years.
//
//                  Over the coming months we will be in touch to discuss your property assets further, however please feel free to request a call sooner.`;
