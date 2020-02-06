import { TEMP } from "../types";

const initialState = {
	message: "Hello World",
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TEMP: {
			return {
				message: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
