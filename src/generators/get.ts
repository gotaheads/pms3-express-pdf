import { Request, Response } from "express";
import {generator} from "./generator";
import * as asyncHandler from 'express-async-handler'

/**
 * GET /
 */
const get = asyncHandler(async (req: Request, res: Response) => {
  console.log('get ');
	const path = await generator();
  res.download(path);
  //res.json({ello:'hi world'});
});

export { get }
