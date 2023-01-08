import * as api from "../api/index.js";


// Action Creators
export const signIn = (formData,history) => {
    return async (dispatch) => {
        try {
        // log in the user...

        history.push("/");
        } catch (error) {
        console.log(error);
        }
    };
}

export const signUp = (formData,history) => {
    return async (dispatch) => {
        try {
        // sign up the user...

        history.push("/");
        } catch (error) {
        console.log(error);
        }
    };
}