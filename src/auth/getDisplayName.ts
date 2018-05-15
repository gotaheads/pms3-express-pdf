import R = require('ramda');
const { isNil, prop, path } = R;

const getDisplayName = (user: object): string => path(['profile', 'displayName'], user);

export {
  getDisplayName
}