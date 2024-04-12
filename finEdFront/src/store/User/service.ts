import axios from "axios";
import { LoginPayload } from "./apiSchema";
import { GET, POST } from "../../utils/axiosInterceptor";



export function loginUser(payload: LoginPayload) {
    return axios({
        url:API_ENDPOINTS.LOGIN ,
        method: POST,
        data: {
            user:payload
        },
    });
}





const API_ENDPOINTS = {
    LOGIN:'/guard/login/',

}