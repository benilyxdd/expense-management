export const GOOGLE_LOGIN = "GOOGLE_LOGIN";
export const GOOGLE_LOGOUT = "GOOGLE_LOGOUT";
export const SIMPLE_LOGIN = "SIMPLE_LOGIN";
export const SIGNUP = "SIGNUP";

export const googleLogIn = (user) => {
	return { type: GOOGLE_LOGIN, user };
};

export const googleLogOut = () => {
	return { type: GOOGLE_LOGOUT };
};

export const simpleLogIn = () => {
	return { type: SIMPLE_LOGIN };
};

export const signup = (email, password) => {
	return { type: SIGNUP, email: email, password: password };
};
