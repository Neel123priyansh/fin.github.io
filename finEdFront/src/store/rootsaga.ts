import { all } from 'redux-saga/effects';
import  userSagaWatcher from './User/saga'


export default function* rootSaga(){
    // Add sagas here
    yield all([
        userSagaWatcher(),
    ])
}