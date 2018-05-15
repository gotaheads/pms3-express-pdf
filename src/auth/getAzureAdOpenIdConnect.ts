const passport = require('passport');

const getAzureAdOpenIdConnect = passport.authenticate('azuread-openidconnect', {failureRedirect: '/'});

export {
  getAzureAdOpenIdConnect,
}
