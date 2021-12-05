import { loadData, saveData } from "../utils/localstorage";
import { DELETE_TOKEN, SET_LOGGEDIN_USER, STORE_TOKEN,LOADING_TWEEET,ERROR_TWEET,GET_TWEET } from "./actionTypes";

const data = {
    loggedIn: false,
    token: "",
    loggedInUser: {},
}

const initState = loadData("twitterToken") || data;

export const tokenReducer = (state = initState, { type, payload }) => {
    // console.log(state);
    switch (type) {
        default: return state
        case STORE_TOKEN:
            const stateObj1 = {
                ...state,
                loggedIn: true,
                token: payload.token,
            }
            saveData("twitterToken", stateObj1);
            return stateObj1;
        case DELETE_TOKEN:
            const stateObj2 = {
                ...state,
                loggedIn: false,
                loggedInUser:{},
                token: "",
            }
            saveData("twitterToken", stateObj2);
            return stateObj2;
        case SET_LOGGEDIN_USER:
            const stateObj3 = {
                ...state,
                loggedInUser: payload
            }
            saveData("twitterToken", stateObj3);
            return stateObj3;
        // case LOADING_TWEEET:
        //     const data123 = {
        //         ...state,
        //     }
            
    }
}