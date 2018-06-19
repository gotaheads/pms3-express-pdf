
const emailContent = `
<html><head> <meta http-equiv='Content-Type' content='text/html; charset=us-ascii'> <title></title> </head>
<body style='font-family:calibri'>
 {{htmlContent}}
</body> </html>`;

const populateEmailContent = (year: number, name: string, sharingLink: string,
                              overviewLink: string, content: string,
                              ): string => {
  //const htmlContent = content.split('\r\n').map(p => `<p>${p}</p>`).join('');
  //const htmlContent = content.replace(/(?:\r\n|\r|\n)/g, '<br>');
  const htmlContent = content;
  return emailContent
    .replace('{{htmlContent}}', htmlContent)
    .replace('{{year}}', `${year}`)
    .replace('{{name}}', name)
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

const createMailBodyWithHtmlContent = (year: number, name: string, recipient: string, sharingLink: string,
                                       overviewLink: string, content: string,
                                       file?: any): string => {
  return JSON.stringify(createPayload(
    populateEmailContent(year, name, sharingLink, overviewLink, content),
    year,
    name,
    recipient,
    file));
}

export {
  createMailBodyWithHtmlContent
}