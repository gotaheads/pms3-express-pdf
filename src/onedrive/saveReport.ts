/**
 * Generates a PUT request to upload a file.
 * @param {string} accessToken The access token to send with the request.
 * @param {Function} callback
 //  */
import {uploadFile} from "../graph/uploadFile";
import * as fs from 'fs';

const saveReport = async (accessToken: string, year: number, landlordNumber: number, pdfPath: string) => {
  const parts = pdfPath.split('/'),
    oneDrivePath = `children/${parts[parts.length -1]}`,
    pdfBuffer = fs.readFileSync(pdfPath);
  console.log('saveReport pdfPath: %s, oneDrivePath: %s, pdfBuffer: %s', pdfPath, oneDrivePath, typeof pdfBuffer)
  return await uploadFile(accessToken, oneDrivePath, pdfBuffer, 'application/pdf');
}

export {
  saveReport
}
