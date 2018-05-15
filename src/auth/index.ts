import {Router} from "express";
import {getAzureAdOpenIdConnect} from "./getAzureAdOpenIdConnect";
import {getAuthenticated} from "./getAuthenticated";
import {redirectToPms3} from "./redirectToPms3";
import {getYear} from "./getYear";

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
