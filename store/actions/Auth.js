import { FIREBASE_API } from "@env";

export const SIMPLE_LOGIN = "SIMPLE_LOGIN";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const EMAIL_CHANGE = "EMAIL_CHANGE";
export const PASSWORD_CHANGE = "PASSWORD_CHANGE";

export const simpleLogIn = () => {
	return { type: SIMPLE_LOGIN };
};

export const signUp = (email, password) => {
	return async (dispatch) => {
		const response = await fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					password: password,
					returnSecureToken: true,
				}),
			}
		);

		if (!response.ok) {
			throw new Error("What");
		}

		const responseData = await response.json();
		dispatch({ type: SIGNUP, payload: responseData });
	};
};

export const logIn = (email, password) => {
	return async (dispatch) => {
		const response = await fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					password: password,
					returnSecureToken: true,
				}),
			}
		);

		if (!response.ok) {
			throw new Error("What");
		}

		const responseData = await response.json();
		dispatch({ type: LOGIN, payload: responseData });
	};
};

export const emailChange = (email) => {
	return { type: EMAIL_CHANGE, email: email };
};

export const passwordChange = (password) => {
	return { type: PASSWORD_CHANGE, password: password };
};
