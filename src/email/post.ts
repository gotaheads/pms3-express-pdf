import {Response} from "express";
import * as asyncHandler from 'express-async-handler';
import {getAccessToken, isAuthenticated} from "../auth/getAuthenticated";
import {PassportRequest} from "../auth/passports";
import R = require('ramda');
import {sendEmailWithContentAndLinks} from "./sendEmailWithContentAndLinks";

const { isNil, prop, path } = R;
//'valuations@portfolioms.com.au'
const post = asyncHandler(async (req: PassportRequest, res: Response) => {
  const year: number = +prop('year', req.query),
    landlordNumber: number = +prop('number', req.query),
    email = prop('email', req.query),
    name = prop('name', req.query);

  console.log('get isAuthenticated: %s, user: %s, year: %s, landlordNumber: %s, email: %s, name: %s, body: %j',
    isAuthenticated(req), req.user, year, landlordNumber, email, name, prop('body', req));
  const overviewLink = path(['body', 'overviewLink'], req);
  const content = path(['body', 'content'], req);

  // const overviewLink = 'https://portfolioms-my.sharepoint.com/:b:/g/personal/valuations_portfolioms_com_au/EectJUKYt9tGs3kXhoXgPUUB_uGxo9wFqkHSHQhcHbMPdA?e=dgTE4C';
  // const content = `Please click below and download market overview and your portfolio's market appraisal for the financial year ending June 30, 2017.
  //
  //                  Due to client feedback, we are delivering these to you via emails. Should you prefer a hard copy of your appraisal, we will be happy to send it out in the same manner as previous years.
  //
  //                  Over the coming months we will be in touch to discuss your property assets further, however please feel free to request a call sooner.`;

  const sent = await sendEmailWithContentAndLinks(getAccessToken(req), year, landlordNumber, email, name,
    overviewLink, content);

  res.json(sent);
});

export { post }
