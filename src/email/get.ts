import { Request, Response } from "express";
import {generator} from "../generators/generator";
import * as asyncHandler from 'express-async-handler';
import {isAuthenticated} from "../auth/getAuthenticated";

import R = require('ramda');
import {PassportRequest} from "../auth/passports";

const { isNil, prop } = R;

const get = asyncHandler(async (req: PassportRequest, res: Response) => {
  const year: number = +prop('year', req.query),
    landlordNumber: number = +prop('number', req.query),
    email = 'valuations@portfolioms.com.au';

  console.log('get isAuthenticated: %s, user: %s, ' +
    'year: %s, landlordNumber: %s, email: %s', isAuthenticated(req), req.user, year, landlordNumber, email);

  const path = await generator(year, landlordNumber);


  res.json({path});
});

export { get }
