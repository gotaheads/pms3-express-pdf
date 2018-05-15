import { Request, Response } from "express";
import {generator} from "./generator";
import * as asyncHandler from 'express-async-handler'
import {isAuthenticated} from "../auth/getAuthenticated";

import R = require('ramda');
import {PassportRequest} from "../auth/passports";

const { isNil, prop } = R;

/**
 * GET /
 */
const get = asyncHandler(async (req: PassportRequest, res: Response) => {
  const year: number = +prop('year', req.query),
   landlordNumber: number = +prop('number', req.query);

  console.log('get isAuthenticated: %s, user: %s, ' +
    'year: %s, landlordNumber: %s', isAuthenticated(req), req.user, year, landlordNumber);

	const path = await generator(year, landlordNumber);
  res.download(path);
  //res.json({ello:'hi world'});
});

export { get }
