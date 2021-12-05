import { DELETE_TOKEN, SET_LOGGEDIN_USER, STORE_TOKEN,LOADING_TWEEET,ERROR_TWEET,GET_TWEET } from "./actionTypes"

export const storeToken = (payload) => {
    return {
        type: STORE_TOKEN,
        payload
    }
}
export const deleteToken = () => {
    return {
        type: DELETE_TOKEN
    }
}
export const setLoggedInUser = (payload) => {
    return {
        type: SET_LOGGEDIN_USER,
        payload
    }
}

/////// newly added 
export const setLoadingTweet = (action) => {
    return {
        type: LOADING_TWEEET,  
    }
}

export const setErrorTweet = (action) => {
    return {
        type: ERROR_TWEET,
    }
}
export const setTweetData = (action) => {
    return {
        type: GET_TWEET,
        payload: action,
    }
}