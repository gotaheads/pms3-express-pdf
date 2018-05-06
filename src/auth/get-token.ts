import {index} from "./index";
import * as passport from "passport";
import {getUserData} from "../graph";
import {dashbaordURl} from "../pms3Urls";


index.get('/token',
  passport.authenticate('azuread-openidconnect', {failureRedirect: '/'}),
  (req: any, res) => {
    console.log('/token req.params: %j ', req.params);
    getUserData(req.user.accessToken).then((user: any) => {
      req.user.profile.displayName = user.body.displayName;
      req.user.profile.emails = [{address: user.body.mail || user.body.userPrincipalName}];
      console.log('/token redirecting to: %s, user: %s', dashbaordURl, req.user);
      res.redirect(dashbaordURl);
    });
  });