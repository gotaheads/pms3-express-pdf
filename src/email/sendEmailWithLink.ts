
import {generator} from "../generators/generator";
import {saveReport} from "../onedrive/saveReport";
import {getSharingLink} from "../graph/getSharingLink";
import {createMailBody} from "./createMailBody";
import {sendMail} from "../graph/sendMail";

const sendEmailWithLink = async (accessToken: string, year: number, landlordNumber: number, email: string, name: string) => {
  console.log('sendEmail year: %s, landlordNumber: %s', year, landlordNumber);

  const path = await generator(year, landlordNumber);
  const saved = await saveReport(accessToken, year, landlordNumber, path);
  const shareLink = await getSharingLink(accessToken, saved.id);
  const mailAsString = createMailBody(year, name, email, shareLink);
  const sent = await sendMail(accessToken, mailAsString);
  console.log('sendEmail saved.id: %s, shareLink: %s', saved.id, shareLink);

  return shareLink;
};

export { sendEmailWithLink };