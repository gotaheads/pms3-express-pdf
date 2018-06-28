import { Request, Response } from "express";
import * as asyncHandler from 'express-async-handler'
import {getAccessToken, isAuthenticated} from "../auth/getAuthenticated";

import {PassportRequest} from "../auth/passports";
import {getItem} from "./getItem";
import R = require('ramda');
const { isNil, prop } = R;

const get = asyncHandler(async (req: PassportRequest, res: Response) => {

  console.log('get isAuthenticated: %s, user: %s, ' +
    'year: %s, landlordNumber: %s', isAuthenticated(req), req.user);

	const item = await getItem(getAccessToken(req));

  res.json(item);
});

export { get }
