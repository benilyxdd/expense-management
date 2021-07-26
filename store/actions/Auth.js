import { FIREBASE_API, FIREBASE_PROJECT_ID } from "@env";
import { setMonthlyBudgetChange } from "./AppData";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const EMAIL_CHANGE = "EMAIL_CHANGE";
export const PASSWORD_CHANGE = "PASSWORD_CHANGE";
export const LOADING = "LOADING";
export const FETCH_USER_DATA = "FETCH_USER_DATA";
export const SET_MONTHLY_BUDGET = "SET_MONTHLY_BUDGET";

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
			throw new Error("Cannot create account");
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
						income: 0,
						expenses: 0,
						total: 0,
						monthlyBudget: 0,
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
			throw new Error("Login Failed");
		}

		const responseData = await response.json();
		const response2 = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${responseData.localId}.json`,
			{
				method: "GET",
			}
		);

		if (!response2.ok) {
			throw new Error("can't fetch user data");
		}

		const responseData2 = await response2.json();
		dispatch({
			type: LOGIN,
			payload: responseData,
			userData: responseData2,
		});
	};
};

export const emailChange = (email) => {
	return { type: EMAIL_CHANGE, email: email };
};

export const passwordChange = (password) => {
	return { type: PASSWORD_CHANGE, password: password };
};

export const fetchUserData = (uid) => {
	return async (dispatch) => {
		const response = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${uid}.json`,
			{
				method: "GET",
			}
		);

		if (!response.ok) {
			throw new Error("can't fetch user data");
		}

		const responseData = await response.json();
		dispatch({ type: FETCH_USER_DATA, payload: responseData });
	};
};

export const setMonthlyBudget = (budget, uid) => {
	return async (dispatch) => {
		const response = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${uid}/basicInfo.json`,
			{
				method: "PATCH",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					monthlyBudget: parseFloat(budget),
				}),
			}
		);

		if (!response.ok) {
			throw new Error("cannot set monthly budget");
		}
		const response2 = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${uid}.json`,
			{
				method: "GET",
			}
		);

		if (!response2.ok) {
			throw new Error("can't fetch user data");
		}

		const responseData2 = await response2.json();
		dispatch({ type: SET_MONTHLY_BUDGET, payload: responseData2 });
	};
};
