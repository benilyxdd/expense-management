import { FETCH_USER_DATA } from "../actions/AppData";

const initialState = {};

const AppDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_DATA:
			return { ...state };
		default:
			return state;
	}
};
