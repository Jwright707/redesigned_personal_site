import {
    UPDATE_PROJECT_SELECTED,
    FETCH_DASHBOARD_DATA
} from "../actions/Dashboard";

import {
    PROJECT_LIST
} from "../actions/Content";

const initialState = {
    projectedSelected: '',
    projectList: [],
    dashboardDescription: [],
    dashboardSkills: [],
};

export default function dashboard(state = initialState, action){
    switch (action.type){
        case UPDATE_PROJECT_SELECTED:
            return {
              ...state,
                projectedSelected: action.payload,
            };
        case FETCH_DASHBOARD_DATA:
            return {
                ...state,
                dashboardDescription: action.payload.description,
                dashboardSkills: action.payload.skills
            }
        case PROJECT_LIST:
            return {
                ...state,
                projectList: action.payload
            }
        default:
            return state;
    }
}