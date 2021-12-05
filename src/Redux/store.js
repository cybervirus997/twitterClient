import { createStore } from "redux";
import { tokenReducer } from "./reducer";

export const store = new createStore(tokenReducer);