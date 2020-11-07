import {
    IS_LOADING
} from "../actions/Loading"

const initialState = {
    loading: false
}

export default function loading (state = initialState, action) {
    switch (action.type){
        case IS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }

}