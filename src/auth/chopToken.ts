export const chopToken = (token: string) => {
  return !!token?token.substring(0, 15):'';
}