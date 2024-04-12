import { LoginPayload } from "./apiSchema";
import { CONSTANTS } from "./constants";

export const LoginUser = (payload: LoginPayload) => ({
    type: CONSTANTS.LOGIN_USER,
    payload
})