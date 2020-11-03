import axios from "axios";

export const FETCH_PROJECT_DATA = 'FETCH_PROJECT_DATA';
export const PROJECT_LIST = 'PROJECT_LIST';

export const fetchProjectData = async (dispatch) => {
    try{
        const projectData = await axios.get(`${process.env.REACT_APP_API}content`)
        const nameExtractor = projectData.data.map(name => name.project_name.replace(" ", "_").toLowerCase())
        const upperCaseFirstChar = nameExtractor.map(name => {
            let lodash = false
            return name.split("").map((char, index) => {

                if (!index || lodash) {
                    lodash = false
                    return char.toUpperCase()
                } else if (char === "_") {
                    lodash = true
                    return char
                } else {
                    return char
                }
            }).join("")
        })
        dispatch({
            type: FETCH_PROJECT_DATA,
            payload: projectData.data
        })
        dispatch({
            type: PROJECT_LIST,
            payload: upperCaseFirstChar
        })
    }catch (err) {
        console.log(err)
    }
}