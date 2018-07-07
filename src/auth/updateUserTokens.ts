import {PassportRequest} from "./passports";

export const  updateUserTokens = (req: PassportRequest, accessToken: string, refreshToken: string) => {
  req.user.accessToken = accessToken;
  req.user.refreshToken = refreshToken;
}
