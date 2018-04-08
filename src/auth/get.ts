import { Request, Response } from "express";
import * as asyncHandler from 'express-async-handler'
const passport = require('passport');

/**
 * GET /
 */
// const get = passport.authenticate('azuread-openidconnect', { failureRedirect: '/' }),
//   (req, res) => {
//     res.redirect('/');
//   });

// const get = asyncHandler(async (req: Request, res: Response) => {
//   console.log('get ');
// 	const path = await generator();
//   res.download(path);
//   //res.json({ello:'hi world'});
// });

// router.get('/login',
//   passport.authenticate('azuread-openidconnect', { failureRedirect: '/' }),
//   (req, res) => {
//     res.redirect('/');
//   });

//export { get }
