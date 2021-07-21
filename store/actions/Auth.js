export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const SIMPLE_LOGIN = "SIMPLE_LOGIN";

export const login = (email, password) => {
	return { type: LOGIN, email: email, password: password };
};

export const signup = (email, password) => {
	return { type: SIGNUP, email: email, password: password };
};

export const simpleLogin = () => {
	return { type: SIMPLE_LOGIN };
};
