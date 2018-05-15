import {Request, Response} from "express";
import R = require('ramda');
const { isNil, prop, path } = R;
import {PassportRequest} from "./passports";

const getAuthenticated = (req: PassportRequest, res: Response) => {
  const authenticated = isAuthenticated(req);
  console.log('/authenticated isAuthenticated: %s, user: %s', authenticated, path(['user','profile','displayName'], req));
  res.json({authenticated: authenticated});
};

const isAuthenticated = (req: PassportRequest): boolean => !isNil(prop('user', req));
const getAccessToken = (req: PassportRequest): string => path(['user', 'accessToken'], req);//req.user.accessToken

export {
  isAuthenticated,
  getAuthenticated,
  getAccessToken,
}