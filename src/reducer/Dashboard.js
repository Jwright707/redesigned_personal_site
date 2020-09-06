import {
    UPDATE_PROJECT_SELECTED
} from "../actions/Dashboard";

const initialState = {
    projectedSelected: ''
};

export default function dashboard(state = initialState, action){
    switch (action.type){
        case UPDATE_PROJECT_SELECTED:
            return {
              ...state,
                projectedSelected: action.payload,
            };

        default:
            return state;
    }
}