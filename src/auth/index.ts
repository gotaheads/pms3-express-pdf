import {Request, Response, Router} from "express";
import {getUserData} from '../graph/index';
import * as passport from 'passport';

import R = require('ramda');
import {dashbaordUrl} from "../pms3Urls";
const { isNil, prop } = R;

export const index = Router();

//index.get("/", get);
index.get('/login',
  passport.authenticate('azuread-openidconnect', {failureRedirect: '/'}),
  (req, res) => {
    const year = prop('year', req.params);
    console.log('/login  redirect to / year: %s ', year);
    res.redirect('/');
});

//'#/valuations/select/{{year}}';

index.get('/token',
  passport.authenticate('azuread-openidconnect', {failureRedirect: '/'}),
  (req: any, res) => {
    console.log('/token req.params: %j ', req.params);
    getUserData(req.user.accessToken).then((user: any) => {
      req.user.profile.displayName = user.body.displayName;
      req.user.profile.emails = [{address: user.body.mail || user.body.userPrincipalName}];
      console.log('/token user: %j, redirecting to ', req.user, dashbaordUrl);
      res.send(`<html>
                  <script>window.location.href = '${dashbaordUrl}?token=${req.user.accessToken}';</script>
                  <a href="${dashbaordUrl}">Continue</a>
               </html>`)

      //res.redirect(`${url}/?token=${req.user.accessToken}`);
      //res.json({text: 'success'});
      // renderError(err, res);
    });
  });
