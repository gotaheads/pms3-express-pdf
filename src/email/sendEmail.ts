
import {generator} from "../generators/generator";
import {saveReport} from "../onedrive/saveReport";

const sendEmail = async (accessToken: string, year: number, landlordNumber: number) => {
  console.log('sendEmail year: %s, landlordNumber: %s', year, landlordNumber);

  const path = await generator(year, landlordNumber);
  const saved = await saveReport(accessToken, year, landlordNumber, path);
  console.log('sendEmail saved: %j', saved);

  return saved;
};

export { sendEmail };