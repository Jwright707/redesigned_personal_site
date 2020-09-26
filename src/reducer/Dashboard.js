import {
    UPDATE_PROJECT_SELECTED,
    FETCH_DASHBOARD_DATA
} from "../actions/Dashboard";

const initialState = {
    projectedSelected: '',
    projectList: ['Food_Backpack', 'Trip_Quest', 'Autobiographical'],
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
        default:
            return state;
    }
}