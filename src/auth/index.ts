import {Router} from "express";
import {getUserData} from '../graph/index';
import * as passport from 'passport';
import {dashbaordUrl, getValuationYear, setValuationYear, valuationsByLandlordUrl} from "../pms3Urls";
import {getDisplayName} from "./getDisplayName";
import R = require('ramda');

const { isNil, prop } = R;

export const index = Router();

//index.get("/", get);
index.get('/login',
  (req, res, next) => {
    const year = setValuationYear(+prop('year', req.query));
    console.log('/login  year: %s ', year);
    next();
  },
  passport.authenticate('azuread-openidconnect', {failureRedirect: '/'}),
);

//'#/valuations/select/{{year}}';

index.get('/token',
  passport.authenticate('azuread-openidconnect', {failureRedirect: '/'}),
  (req: any, res) => {
  const year = getValuationYear(),
  url = valuationsByLandlordUrl(year);
  console.log('/token year: %s ', year);
    getUserData(req.user.accessToken).then((user: any) => {
      req.user.profile.displayName = user.body.displayName;
      req.user.profile.emails = [{address: user.body.mail || user.body.userPrincipalName}];
      console.log('/token user: %s, redirecting to ', getDisplayName(req.user), url);
      res.send(`<html>
                  <script>window.location.href = '${url}?token=${req.user.accessToken}';</script>
                  <a href="${url}">Continue</a>
               </html>`)

      //res.redirect(`${url}/?token=${req.user.accessToken}`);
      //res.json({text: 'success'});
      // renderError(err, res);
    });
  });
