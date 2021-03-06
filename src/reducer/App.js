import {
    TOP_ARROW_UPDATE,
    BOTTOM_ARROW_UPDATE,
    UPDATE_NAVBAR,
} from "../actions/App";

const initialState = {
    topArrow: false,
    bottomArrow: false,
    navbarOpen: false
};

export default function app(state = initialState, action){
    switch (action.type){
        case TOP_ARROW_UPDATE:
            return {
                ...state,
                topArrow: action.payload
            };
        case BOTTOM_ARROW_UPDATE:
            return {
                ...state,
                bottomArrow: action.payload
            };
        case UPDATE_NAVBAR:
            return {
                ...state,
                navbarOpen: action.payload
            }
        default:
            return state
    }
}