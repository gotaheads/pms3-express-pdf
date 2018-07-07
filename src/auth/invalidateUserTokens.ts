import {PassportRequest} from "./passports";
import {updateUserTokens} from "./updateUserTokens";

export const  invalidateUserTokens = (req: PassportRequest) => {
  updateUserTokens(req, null, null);
}
