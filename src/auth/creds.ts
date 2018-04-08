
const creds = {
  redirectUrl: 'http://localhost:3100/auth/token',
  clientID: '7f21a44c-e367-41ab-b6be-8f3bb1c59e6a',
  clientSecret: 'bbAXOZJO931);(~dzrwjU34',
  identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',
  allowHttpForRedirectUrl: true, // For development only
  responseType: 'code',
  validateIssuer: false, // For development only
  responseMode: 'query',
  scope: ['User.Read', 'Mail.Send', 'Files.ReadWrite']
};

export { creds }