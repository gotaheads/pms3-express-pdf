import {Request} from "express";

interface PassportUserProfile {
  displayName: string;
  emails: any[];
}

interface PassportUser {
  profile: PassportUserProfile
  accessToken: string;
  refreshToken: string;
}

interface PassportRequest extends Request {
  user: PassportUser;
}

export {
  PassportRequest,
  PassportUser,
}