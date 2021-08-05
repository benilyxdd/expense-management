import {
	SIGNUP,
	LOGIN,
	LOGOUT,
	FETCH_USER_DATA,
	SET_MONTHLY_BUDGET,
	EMAIL_CHANGE,
	PASSWORD_CHANGE,
	LOADING,
} from "../actions/Auth";

const initialState = {
	idToken: "",
	isLoading: false,
	isLoggedIn: false,
	uid: "",
	userData: {},
	userEmail: "",
	userPassword: "",
};

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGNUP:
			return {
				...state,
				isLoading: false,
				userEmail: "",
				userPassword: "",
			};
		case LOGIN:
			return {
				...state,
				idToken: action.payload.idToken,
				isLoading: false,
				isLoggedIn: true,
				uid: action.payload.localId,
				userData: action.userData,
			};
		case LOGOUT:
			return {
				...state,
				idToken: "",
				isLoggedIn: false,
				uid: "",
				userData: {},
				userEmail: "",
				userPassword: "",
			};
		case FETCH_USER_DATA:
			return {
				...state,
				userData: action.payload,
			};
		case SET_MONTHLY_BUDGET:
			return {
				...state,
				userData: action.payload,
			};
		case EMAIL_CHANGE:
			return { ...state, userEmail: action.email };
		case PASSWORD_CHANGE:
			return { ...state, userPassword: action.password };
		case LOADING:
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};

export default AuthReducer;
