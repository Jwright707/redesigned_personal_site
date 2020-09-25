import axios from "axios";

export const FETCH_PROJECT_DATA = 'FETCH_PROJECT_DATA';

export const fetchProjectData = async (dispatch) => {
    try{
        const projectData = await axios.get(`${process.env.REACT_APP_API}content`)
        dispatch({
            type: FETCH_PROJECT_DATA,
            payload: projectData.data
        })
    }catch (err) {
        console.log(err)
    }
}