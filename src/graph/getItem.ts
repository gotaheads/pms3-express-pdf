import * as request from "superagent";
import {createGraphUrl} from "./getGraphUrl";
import {DriveItem} from "@microsoft/microsoft-graph-types";
import R = require('ramda');
const { prop, path } = R;

const getItem= (accessToken: string): Promise<DriveItem> => {
  const url = createGraphUrl(`drive/root/2018`);
  console.log('listChildren url: %s', url)
  return request
    .get(url)
    .set('Authorization', 'Bearer ' + accessToken)
    .set('Content-Type', 'mimeType')
    .then(res => res.body);
}

export {
  getItem,
}