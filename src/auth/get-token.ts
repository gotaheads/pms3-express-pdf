import {index} from "./index";
import * as passport from "passport";
import {getUserData} from "../graph";
const url = 'http://localhost:9000/#/dashboard';

index.get('/token',
  passport.authenticate('azuread-openidconnect', {failureRedirect: '/'}),
  (req: any, res) => {
    console.log('/token req.params: %j ', req.params);
    getUserData(req.user.accessToken).then((user: any) => {
      req.user.profile.displayName = user.body.displayName;
      req.user.profile.emails = [{address: user.body.mail || user.body.userPrincipalName}];
      console.log('/token user: %j, redirecting to ', req.user, url);
      res.redirect(url);
    });
  });