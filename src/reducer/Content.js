import {
    FETCH_PROJECT_DATA
} from '../actions/Content';

const initialState = {
    projectContents: []
}

export default function content(state = initialState, action){
    switch (action.type){
        case FETCH_PROJECT_DATA:
            return {
                projectContents: action.payload
            }
        default:
            return state
    }
}