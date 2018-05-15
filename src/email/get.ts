import { Request, Response } from "express";
import {generator} from "../generators/generator";
import * as asyncHandler from 'express-async-handler';
import {getAccessToken, isAuthenticated} from "../auth/getAuthenticated";

import R = require('ramda');
import {PassportRequest} from "../auth/passports";
import {sendEmail} from "./sendEmail";

const { isNil, prop } = R;

const get = asyncHandler(async (req: PassportRequest, res: Response) => {
  const year: number = +prop('year', req.query),
    landlordNumber: number = +prop('number', req.query),
    email = 'valuations@portfolioms.com.au';

  console.log('get isAuthenticated: %s, user: %s, ' +
    'year: %s, landlordNumber: %s, email: %s', isAuthenticated(req), req.user, year, landlordNumber, email);

  const sent = await sendEmail(getAccessToken(req), year, landlordNumber);

  res.json(sent);
});

export { get }
