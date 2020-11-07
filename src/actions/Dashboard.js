import axios from 'axios';
import {isLoading} from "./Loading"
export const FETCH_DASHBOARD_DATA = 'FETCH_DASHBOARD_DATA';
export const UPDATE_PROJECT_SELECTED = 'UPDATE_PROJECT_SELECTED';

export const updateProjectSelected = (values, dispatch) => dispatch({type: UPDATE_PROJECT_SELECTED, payload: values})

export const fetchDashboardData = async (dispatch) => {
    isLoading(
        true,
        dispatch
    )
    try{
        const dashboardData = await axios.get(`${process.env.REACT_APP_API}home`)
        const {description, skills} = dashboardData?.data?.reduce((object, item) => {
            const varToggle = item.skills ? 'skills' : 'description';
            object[varToggle].push(item)
            return object
        }, {
            description: [],
            skills: []
        })
        if (dashboardData){
            isLoading(
                false,
                dispatch
            )
            dispatch({
                type: FETCH_DASHBOARD_DATA,
                payload: {
                    description: description,
                    skills: skills
                }
            })
        }
    }catch (err) {
        console.log(err)
    }
}