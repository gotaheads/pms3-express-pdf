import {Response} from "express";
import * as asyncHandler from 'express-async-handler';
import {PassportRequest} from "../auth/passports";
import {sendEmail} from "./sendEmail";
import R = require('ramda');

const post = asyncHandler(async (req: PassportRequest, res: Response) => {
  try {
    const sent = await sendEmail(req);
    res.json(sent);
  }catch (err){
    const statusCode = +path(['err', 'status'],err);
    const text = +path(['err', 'text'],err);
    console.error('send email failed with status: %s, text: %s, err: %j',
      statusCode, text,  err);
    switch (statusCode) {
      case 504:
      default:
        console.log('retry...');
        const sent = await sendEmail(req);
        res.json(sent);
    }

  }
});
const { isNil, prop, path } = R;


export { post }

//'valuations@portfolioms.com.au'
// const overviewLink = 'https://portfolioms-my.sharepoint.com/:b:/g/personal/valuations_portfolioms_com_au/EectJUKYt9tGs3kXhoXgPUUB_uGxo9wFqkHSHQhcHbMPdA?e=dgTE4C';
// const content = `Please click below and download market overview and your portfolio's market appraisal for the financial year ending June 30, 2017.
//
//                  Due to client feedback, we are delivering these to you via emails. Should you prefer a hard copy of your appraisal, we will be happy to send it out in the same manner as previous years.
//
//                  Over the coming months we will be in touch to discuss your property assets further, however please feel free to request a call sooner.`;
