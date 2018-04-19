'use strict';
//import R = require('ramda');

import {NextFunction, Request, Response} from "express";
import {isAuthenticated} from "./get-authenticated";

const checkAuth = (req: Request, res: Response, next: NextFunction): any => {
  const authenticated = isAuthenticated(req);
  console.log('app-check-atuh req.isAuthenticated(): %s', authenticated);
   return authenticated ? next()
     : next({statusCode: 403, text: 'Not authorised.'});
   //next(err);
}

export { checkAuth }