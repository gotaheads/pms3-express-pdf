import {Router} from "express";
import {getAzureAdOpenIdConnect, getYear} from "./get-login";
import {getAuthenticated} from "./get-authenticated";
import {redirectToPms3} from "./redirect-to-pms3";
import R = require('ramda');
const { isNil, prop } = R;

export const index = Router();

index.get('/authenticated', getAuthenticated);
index.get("/login",
  getYear,
  getAzureAdOpenIdConnect,
);

index.get('/token',
  getAzureAdOpenIdConnect,
  redirectToPms3,
);
