import {Router} from "express";
import {getUserData} from '../graph/index';
import * as passport from 'passport';

export const index = Router();

//index.get("/", get);
index.get('/login',
  passport.authenticate('azuread-openidconnect', {failureRedirect: '/'}),
  (req, res) => {
    console.log('/login  redirect to /');
    res.redirect('/');
  });

index.get('/token',
  passport.authenticate('azuread-openidconnect', {failureRedirect: '/'}),
  (req: any, res) => {
    getUserData(req.user.accessToken).then((user: any) => {
      req.user.profile.displayName = user.body.displayName;
      req.user.profile.emails = [{address: user.body.mail || user.body.userPrincipalName}];
      console.log('/token user: %j', req.user);
      res.json({text: 'success'});
      //renderSendMail(req, res);

      //renderError(err, res);

    });
  });