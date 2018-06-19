
import {generator} from "../generators/generator";
import {saveReport} from "../onedrive/saveReport";
import {getSharingLink} from "../graph/getSharingLink";
import {createMailBody} from "./createMailBody";
import {sendMail} from "../graph/sendMail";
import {createMailBodyWithContent} from "./createMailBodyWithContent";
import {createMailBodyWithHtmlContent} from "./createMailBodyWithHtmlContent";

const sendEmailWithContentAndLinks =
  async (accessToken: string, year: number, landlordNumber: number, email: string, name: string,
         overviewLink: string, emailContents: string) => {
  console.log('sendEmail year: %s, landlordNumber: %s', year, landlordNumber);

  const path = await generator(year, landlordNumber);
  const saved = await saveReport(accessToken, year, landlordNumber, path);
  const shareLink = await getSharingLink(accessToken, saved.id);
  const mailAsString = createMailBodyWithHtmlContent(year, name, email, shareLink, overviewLink, emailContents);
  const sent = await sendMail(accessToken, mailAsString);
  console.log('sendEmail saved.id: %s, shareLink: %s', saved.id, shareLink);

  return shareLink;
};

export { sendEmailWithContentAndLinks };