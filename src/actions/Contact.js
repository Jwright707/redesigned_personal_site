import axios from "axios";

export const EMAIL_RESPONSE = 'EMAIL_RESPONSE';
export const RESET_EMAIL_RESPONSE = 'RESET_EMAIL_RESPONSE';

export const resetEmailResponse = (values, dispatch) => dispatch({type: RESET_EMAIL_RESPONSE, payload: values})

export const emailResponse = async (values, dispatch) => {
    try{
        const emailCallback = await axios.post(`${process.env.REACT_APP_API}email`, {
            name: values.name,
            email: values.email,
            message: values.message,
        })
        dispatch({
            type: EMAIL_RESPONSE,
            payload: emailCallback.status
        })
    }catch (err) {
        console.log(err)
    }
}