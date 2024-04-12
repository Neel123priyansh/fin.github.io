import { CONSTANTS } from "./constants";


type UserReducerState = {
    userData: UserData;
    isFetching: boolean;
    error: string;
}
type UserData = {
    email: string;
    username: string;
}
const initialState: UserReducerState = {
    userData: {
        email: '',
        username: '',
    },
    isFetching: false,
    error: '',
}


const reducer = (state: UserReducerState = initialState, action: any): UserReducerState => {
    switch (action.type) {
        case CONSTANTS.LOGIN_USER:
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case CONSTANTS.LOGIN_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case CONSTANTS.LOGIN_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: ''
            }
        default:
            return state;    
    }
}
export default reducer