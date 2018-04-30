import { Request, Response } from "express";
import {generator} from "./generator";
import * as asyncHandler from 'express-async-handler'
import {isAuthenticated} from "../auth/get-authenticated";

import R = require('ramda');
const { isNil, prop } = R;

/**
 * GET /
 */
const get = asyncHandler(async (req: Request, res: Response) => {
  const year = prop('year', req.params),
   landlordNumber = prop('number', req.params)
  ;

  console.log('get isAuthenticated: %s, user: %s, ' +
    'year: %s, landlordNumber: %s', isAuthenticated(req), req.user, year, landlordNumber);

	const path = await generator();
  res.download(path);
  //res.json({ello:'hi world'});
});

export { get }
