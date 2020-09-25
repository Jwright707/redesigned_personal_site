import {
    EMAIL_RESPONSE,
    RESET_EMAIL_RESPONSE
} from '../actions/Contact'

const initialState = {
    emailStatus: false
};

export default function contact(state = initialState, action) {
    switch (action.type){
        case EMAIL_RESPONSE:
            return {
                ...state,
                emailStatus: action.payload === 200
            }
        case RESET_EMAIL_RESPONSE:
            return {
                ...state,
                emailStatus: action.payload,
            }
        default:
            return state
    }
}