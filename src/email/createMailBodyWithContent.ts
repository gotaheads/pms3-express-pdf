// The contents of the outbound email message that will be sent to the user
import {emailTemplate} from "./emailTemplate";

const populateEmailContent = (year: number, name: string, sharingLink: string,
                              overviewLink: string, content: string,
                              ): string => {
  //const htmlContent = content.split('\r\n').map(p => `<p>${p}</p>`).join('');
  const htmlContent = content.replace(/(?:\r\n|\r|\n)/g, '<br>');

  //const htmlContent = content;
  return emailTemplate
    .replace('{{year}}', `${year}`)
    .replace('{{name}}', name)
    .replace('{{htmlContent}}', htmlContent)
    .replace('{{sharingLink}}', sharingLink)
    .replace('{{overviewLink}}', overviewLink);
}

//https://stackoverflow.com/questions/2670037/how-to-remove-invalid-utf-8-characters-from-a-javascript-string
//unescape(encodeURIComponent(content))
const createPayload = (content: string, year: number, name: string, recipient: string, file: any): object => {
  // const attachments = [{
  //   '@odata.type': '#microsoft.graph.fileAttachment',
  //   ContentBytes: file.toString('base64'),
  //   Name: 'mypic.jpg'
  // }];
  return {
    Message: {
      Subject: `${name} - ${2018} valuation report is ready for download`,
      Body: {
        ContentType: 'HTML',
        Content: content
      },
      ToRecipients: [
        {
          EmailAddress: {
            Address: recipient
          }
        }
      ],
      Attachments: []
    },
    SaveToSentItems: true,
  };
}

const createMailBodyWithContent = (year: number, name: string, contactName: string, recipient: string, sharingLink: string,
                        overviewLink: string, content: string,
                        file?: any): string => {
  return JSON.stringify(createPayload(
    populateEmailContent(year, contactName, sharingLink, overviewLink, content),
    year,
    name,
    recipient,
    file));
}

export {
  createMailBodyWithContent
}