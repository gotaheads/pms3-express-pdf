import {NextFunction, Request, Response} from "express";
import * as asyncHandler from 'express-async-handler'
import {setValuationYear} from "../pms3Urls";
import R = require('ramda');
import {index} from "./index";
const { isNil, prop } = R;

const passport = require('passport');

const getYear = (req: Request, res: Response, next: NextFunction) => {
  const year = setValuationYear(+prop('year', req.query));
  console.log('/login  year: %s ', year);
  next();
};

export {
  getYear,
}
