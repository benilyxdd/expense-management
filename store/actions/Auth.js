export const SIMPLE_LOGIN = "SIMPLE_LOGIN";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const EMAIL_CHANGE = "EMAIL_CHANGE";
export const PASSWORD_CHANGE = "PASSWORD_CHANGE";

export const simpleLogIn = () => {
	return { type: SIMPLE_LOGIN };
};

export const signUp = () => {
	return { type: SIGNUP };
};

export const logIn = () => {
	return { type: LOGIN };
};

export const emailChange = (email) => {
	return { type: EMAIL_CHANGE, email: email };
};

export const passwordChange = (password) => {
	return { type: PASSWORD_CHANGE, password: password };
};
