import { LOGIN, SIGNUP, SIMPLE_LOGIN } from "../actions/Auth";

const initialState = {
	isLoggedIn: false,
};

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIMPLE_LOGIN:
			return { ...state, isLoggedIn: true };
		default:
			return state;
	}
};

export default AuthReducer;
