import { FETCH_USER_DATA } from "../actions/AppData";

const initialState = {
	userData: {},
};

const AppDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_DATA:
			return { ...state, userData: action.payload };
		default:
			return state;
	}
};

export default AppDataReducer;