import {NextFunction, Request, Response} from "express";
import {isAuthenticated} from "./getAuthenticated";
import {PassportRequest} from "./passports";

const checkAuth = (req: PassportRequest, res: Response, next: NextFunction): any => {
  const authenticated = isAuthenticated(req);
  console.log('app-check-atuh req.isAuthenticated(): %s', authenticated);
   return authenticated ? next()
     : next({statusCode: 403, text: 'Not authorised.'});
}

export { checkAuth }