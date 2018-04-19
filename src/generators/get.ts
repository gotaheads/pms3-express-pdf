import { Request, Response } from "express";
import {generator} from "./generator";
import * as asyncHandler from 'express-async-handler'
import {isAuthenticated} from "../auth/get-authenticated";

/**
 * GET /
 */
const get = asyncHandler(async (req: Request, res: Response) => {
  console.log('get isAuthenticated: %s, user: %j', isAuthenticated(req), req.user);
	const path = await generator();
  res.download(path);
  //res.json({ello:'hi world'});
});

export { get }
