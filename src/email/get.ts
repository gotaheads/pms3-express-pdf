import {Response} from "express";
import * as asyncHandler from 'express-async-handler';
import {getAccessToken, isAuthenticated} from "../auth/getAuthenticated";
import {PassportRequest} from "../auth/passports";
import {sendEmailWithLink} from "./sendEmailWithLink";
import R = require('ramda');

const { isNil, prop } = R;
//'valuations@portfolioms.com.au'
const get = asyncHandler(async (req: PassportRequest, res: Response) => {
  const year: number = +prop('year', req.query),
    landlordNumber: number = +prop('number', req.query),
    email = prop('email', req.query),
    name = prop('name', req.query);

  console.log('get isAuthenticated: %s, user: %s, year: %s, landlordNumber: %s, email: %s, name: %s',
    isAuthenticated(req), req.user, year, landlordNumber, email, name);

  const sent = await sendEmailWithLink(getAccessToken(req), year, landlordNumber, email, name);

  res.json(sent);
});

export { get }
