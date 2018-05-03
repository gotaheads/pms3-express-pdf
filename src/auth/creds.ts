const env = process.env;

const creds = {
  redirectUrl: env.CREDS_REDIRECT_URL,
  clientID: env.CREDS_CLIENT_ID,
  clientSecret: env.CREDS_CLIENT_SECRET,
  identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',
  allowHttpForRedirectUrl: env.CREDS_ALLOW_HTTP_FOR_REDIRECT_URl, // For development only
  responseType: 'code',
  validateIssuer: env.CREDS_VALIDATE_ISSUER, // For development only
  responseMode: 'query',
  scope: ['User.Read', 'Mail.Send', 'Files.ReadWrite']
};
console.log('creds: %j', creds);
export { creds }