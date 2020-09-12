import axios from "axios";

export const EMAIL_RESPONSE = 'EMAIL_RESPONSE';

export const emailResponse = async (values, dispatch) => {
    try{
        const emailCallback = await axios.post('http://localhost:5000/email', {
            name: values.name,
            email: values.email,
            message: values.message,
        })
        console.log(emailCallback)
    }catch (err) {
        console.log(err)
    }
}