import {Request, Response} from "express";
import R = require('ramda');
const { isNil, prop, path } = R;


const getAuthenticated = (req: Request, res: Response) => {
  const authenticated = isAuthenticated(req);
  console.log('/authenticated isAuthenticated: %s, user: %s', authenticated, path(['user','profile','displayName'], req));
  res.json({authenticated: authenticated});
};

const isAuthenticated = (req: Request): boolean => !isNil(prop('user', req));

export {
  isAuthenticated,
  getAuthenticated,
}