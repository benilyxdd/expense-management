export const GOOGLE_LOGIN = "GOOGLE_LOGIN";
export const SIGNUP = "SIGNUP";
export const SIMPLE_LOGIN = "SIMPLE_LOGIN";

export const googleLogin = () => {
	return { type: GOOGLE_LOGIN };
};

export const signup = (email, password) => {
	return { type: SIGNUP, email: email, password: password };
};

export const simpleLogin = () => {
	return { type: SIMPLE_LOGIN };
};
