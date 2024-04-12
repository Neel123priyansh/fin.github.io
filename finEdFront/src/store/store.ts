import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootsaga.ts';
import userReducer from './User/reducers.ts'


const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
    // Add Reducers Here
    user:userReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (defaultMiddleware) =>
        defaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;