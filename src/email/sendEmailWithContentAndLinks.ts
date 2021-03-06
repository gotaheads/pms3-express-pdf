
import {generator} from "../generators/generator";
import {saveReport} from "../onedrive/saveReport";
import {getSharingLink} from "../graph/getSharingLink";
import {createMailBody} from "./createMailBody";
import {sendMail} from "../graph/sendMail";
import {createMailBodyWithContent} from "./createMailBodyWithContent";
import {createMailBodyWithHtmlContent} from "./createMailBodyWithHtmlContent";
import {chopToken} from "../auth/chopToken";

const sendEmailWithContentAndLinks =
  async (accessToken: string, year: number, landlordNumber: number,
         email: string, name: string, contactName: string,
         overviewLink: string, emailContents: string) => {
  console.log('sendEmail year: %s, landlordNumber: %s, accessToken: %s',
    year, landlordNumber, chopToken(accessToken));

  const path = await generator(year, landlordNumber);
  const saved = await saveReport(accessToken, year, landlordNumber, path);
  const shareLink = await getSharingLink(accessToken, saved.id);
  const mailAsString = createMailBodyWithContent(year, name, contactName, email, shareLink, overviewLink, emailContents);

  const sent = await sendMail(accessToken, mailAsString);
  //console.log('sendEmail saved.id: %s, shareLink: %s', saved.id, shareLink);

  return shareLink;
};

export { sendEmailWithContentAndLinks };

// const saved = {id:-1};
// const shareLink = '';
