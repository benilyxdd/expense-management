import { SIMPLE_LOGIN, SIGNUP, LOGIN } from "../actions/Auth";

const initialState = {
	isLoggedIn: false,
	userEmail: "",
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
