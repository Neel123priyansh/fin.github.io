import * as Effects from 'redux-saga/effects'
import * as ApiService from './service'
import { CONSTANTS } from './constants';
import { SOMETHING_WRONG } from '../../utils/axiosInterceptor';


const call = Effects.call;
const put = Effects.put;
const takeLatest = Effects.takeLatest;



function* loginUser(action: any):any {
    try {
        const response = yield call(ApiService.loginUser, action.payload);
        console.log(response)
        switch (response.status) {
            case 200:
                action.payload.onSuccess(response.data)
                yield put({ type: CONSTANTS.LOGIN_USER_SUCCESS, payload: response.data.message });
                break;
            default:
                action.payload.onError(response.data)
                yield put({ type: CONSTANTS.LOGIN_USER_FAILURE, payload: response.data.message });
        }
    } catch (error) {
        console.log(error)
        action.payload.onError({message:SOMETHING_WRONG})
        yield put({ type: CONSTANTS.LOGIN_USER_FAILURE, payload: SOMETHING_WRONG });
    }
}


export default function* actionWatcher() {
    yield takeLatest(CONSTANTS.LOGIN_USER, loginUser)
}