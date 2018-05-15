
const baseGraphUrl = 'https://graph.microsoft.com/beta/me';
const createGraphUrl = (context: string): string => `${baseGraphUrl}/${context}`;

export {
  baseGraphUrl,
  createGraphUrl,
}