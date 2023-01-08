import * as api from "../api/index.js";


// Action Creators
export const signIn = (formData,history) => {
    return async (dispatch) => {
        try {
        // log in the user...

        const {data } = await api.signIn(formData);
        dispatch({type: 'AUTH', data});
        history("/");
        } catch (error) {
        console.log(error, "signin action failed");
        }
    };
}

export const signUp = (formData,history) => {
    return async (dispatch) => {
        try {
        // sign up the user...
        const {data } = await api.signUp(formData);
        dispatch({type: 'AUTH',  data});

        history("/");
        } catch (error) {
        console.log(error);
        }
    };
}