import { Request, Response } from "express";
import {getUserData} from "../graph";
import {dashbaordUrl, getValuationYear, valuationsByLandlordUrl} from "../pms3Urls";
import {getDisplayName} from "./getDisplayName";


interface PassportUserProfile {
  displayName: string;
  emails: any[];
}

interface PassportUser {
  profile: PassportUserProfile
  accessToken: string;
}

interface PassportRequest extends Request {
  user: PassportUser;
}

const redirectToPms3 = (req: PassportRequest, res: Response) => {
  const year = getValuationYear(),
    url = valuationsByLandlordUrl(year);
  console.log('redirectToPms3 year: %s ', year);
  getUserData(req.user.accessToken).then((user: any) => {
    req.user.profile.displayName = user.body.displayName;
    req.user.profile.emails = [{address: user.body.mail || user.body.userPrincipalName}];
    console.log('redirectToPms3 user: %s, redirecting to ', getDisplayName(req.user), url);
    res.send(`<html>
                  <script>window.location.href = '${url}?token=${req.user.accessToken}';</script>
                  <a href="${url}">Continue</a>
               </html>`)
  });
}

export {
  redirectToPms3,
}

//
// index.get('/token',
//   passport.authenticate('azuread-openidconnect', {failureRedirect: '/'}),
//   (req: any, res) => {
//     console.log('/token req.params: %j ', req.params);
//     getUserData(req.user.accessToken).then((user: any) => {
//       req.user.profile.displayName = user.body.displayName;
//       req.user.profile.emails = [{address: user.body.mail || user.body.userPrincipalName}];
//       console.log('/token redirecting to: %s, user: %s', dashbaordUrl, req.user);
//       res.redirect(dashbaordUrl);
//     });
//   });