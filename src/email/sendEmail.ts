
import {generator} from "../generators/generator";
import {saveReport} from "../onedrive/saveReport";
import {getSharingLink} from "../graph/getSharingLink";

const sendEmail = async (accessToken: string, year: number, landlordNumber: number) => {
  console.log('sendEmail year: %s, landlordNumber: %s', year, landlordNumber);

  const path = await generator(year, landlordNumber);
  const saved = await saveReport(accessToken, year, landlordNumber, path);
  const shareLink = await getSharingLink(accessToken, saved.id);

  console.log('sendEmail saved.id: %s, shareLink: %s', saved.id, shareLink);

  return shareLink;
};

export { sendEmail };