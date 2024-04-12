
import axios, {
    AxiosError,
    AxiosInstance,
    AxiosResponse,
    AxiosRequestConfig,
    InternalAxiosRequestConfig,
} from 'axios';
import { NavigateFunction } from 'react-router-dom';

/**
 * @Description
 * This file intended to intercept incoming request and response.
 * Main utility will to authorize the user else redirect to login page.
 * or we want the error to display api failure and sentry logs can be put here.
 */


export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const DELTE = 'DELETE';
export const SOMETHING_WRONG = 'Something went wrong';

export interface CustomRequest extends AxiosRequestConfig {
    isAuthRequired?: boolean;
}

export interface CommonResponse {
    status: 'Success' | 'Failed';
    data: object;
}

const source = axios.CancelToken.source();

export interface CustomRequest extends AxiosRequestConfig {
    isAuthRequired?: boolean;
}

export interface CommonResponse {
    status: 'Success' | 'Failed';
    data: object;
}

const token = localStorage.getItem('token');

const onRequest = (
    config: InternalAxiosRequestConfig<never> | Promise<InternalAxiosRequestConfig<never>>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    navigate: NavigateFunction,
): InternalAxiosRequestConfig<never> | Promise<InternalAxiosRequestConfig<never>> => {
    return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    // captureMessagesViaErrorLogger(error.message);
    return Promise.reject(error);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onResponse = (response: AxiosResponse, navigate: NavigateFunction): AxiosResponse => {
    return response;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onResponseError = (error: AxiosError, navigate: NavigateFunction): Promise<AxiosError> => {
    if (error.response?.status === 401) {
        // source.cancel();
        // TODO: Add logout logic here
    }
    return Promise.reject(error);
};

export function applyInterceptor(
    axiosInstance: AxiosInstance,
    navigate: NavigateFunction,
): AxiosInstance {
    axiosInstance.defaults.baseURL = 'http://localhost:8000'; // @TODO: Add base url once deployed
    axiosInstance.defaults.cancelToken = source.token;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    axiosInstance.interceptors.request.use((req) => onRequest(req, navigate), onRequestError);
    axiosInstance.interceptors.response.use(
        (res) => onResponse(res, navigate),
        (err) => onResponseError(err, navigate),
    );
    if(token) {
        addTokenToHeaders(axiosInstance, token);
    }
    return axiosInstance;
}

export function addTokenToHeaders(axiosInstance: AxiosInstance, token: string): void {
    axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`;
}