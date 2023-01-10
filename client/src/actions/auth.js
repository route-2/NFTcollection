import * as api from "../api/index.js";


// Action Creators
export const signin = (formData,navigate) => {
    return async (dispatch) => {
        try {
        // log in the user...

        const {data } = await api.signIn(formData);
        dispatch({type: 'AUTH', data});
        navigate("/");
        } catch (error) {
        console.log(error, "signin action failed");
        }
    };
}

export const signup = (formData,navigate) => {
    return async (dispatch) => {
        try {
        // sign up the user...
        const {data } = await api.signUp(formData);
        dispatch({type: 'AUTH',  data});

        navigate("/");
        } catch (error) {
        console.log(error, "signup action failed");
        }
    };
}