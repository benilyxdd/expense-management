export const SIMPLE_LOGIN = "SIMPLE_LOGIN";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const simpleLogIn = () => {
	return { type: SIMPLE_LOGIN };
};

export const signup = (email, password) => {
	return { type: SIGNUP, email: email, password: password };
};

export const login = (email, password) => {
	return { type: LOGIN, email: email, password: password };
}