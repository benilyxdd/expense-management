import { FIREBASE_API, FIREBASE_PROJECT_ID } from "@env";

export const SIMPLE_LOGIN = "SIMPLE_LOGIN";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const EMAIL_CHANGE = "EMAIL_CHANGE";
export const PASSWORD_CHANGE = "PASSWORD_CHANGE";
export const LOADING = "LOADING";

export const simpleLogIn = () => {
	return { type: SIMPLE_LOGIN };
};

export const signUp = (email, password) => {
	return async (dispatch) => {
		dispatch({ type: LOADING, payload: true });
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
			dispatch({ type: LOADING, payload: false });
			throw new Error("Login Failed");
		}

		const responseData = await response.json();
		await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${responseData.localId}.json`,
			{
				method: "PATCH",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					basicInfo: {
						assets: 0,
						liabilities: 0,
						total: 0,
					},
				}),
			}
		);
		dispatch({ type: SIGNUP, payload: responseData });
	};
};

export const logIn = (email, password) => {
	return async (dispatch) => {
		dispatch({ type: LOADING, payload: true });
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
			dispatch({ type: LOADING, payload: false });
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
