import { combineReducers } from "redux";

import tempReducer from "./temp";

export default combineReducers({
	temp: tempReducer,
});
