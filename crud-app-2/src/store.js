import { combineReducers, legacy_createStore } from "redux";
import { reducer as authreducer } from "./redux/Authentication/reducer";
import { reducer as prductreducer } from "./Products/reducer";

const rootReducer =combineReducers({
    authreducer,
    prductreducer,
});

export const store=legacy_createStore(rootReducer)