
// The contents of the outbound email message that will be sent to the user
const emailContent = `
<html><head> <meta http-equiv='Content-Type' content='text/html; charset=us-ascii'> <title></title> </head>
<body style='font-family:calibri'>
 <p>Dear {{name}},</p>
 <p>
 Please click below and download our market overview and your portfolio’s market appraisal for the financial year ending June 30, {{year}}.
 </p>
 <p>
 Due to client feedback, we are delivering these to you via emails. Should you prefer a hard copy of your appraisal, we will be happy to send it out in the same manner as previous years.
 </p>
 <p>
 Over the coming months we will be in touch to discuss your property assets further, however please feel free to request a call sooner.
 </p>
 <a href='{{sharingLink}}'>Click here to view your valuation report.</a>
 
</body> </html>`;

const populateEmailContent = (year: number, name: string, sharingLink: string): string => {
  return emailContent
    .replace('{{year}}', `${year}`)
    .replace('{{name}}', name)
    .replace('{{sharingLink}}', sharingLink);
}

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

const createMailBody = (year: number, name: string, recipient: string, sharingLink: string, file?: any): string => {
  return JSON.stringify(createPayload(
    populateEmailContent(year, name, sharingLink),
    year,
    name,
    recipient,
    file));
}

export {
  createMailBody
}