import { FIREBASE_PROJECT_ID } from "@env";

export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";

export const INPUT_ACCOUNT_CHANGE = "INPUT_ACCOUNT_CHANGE";
export const RESET_INPUT_ACCOUNT = "RESET_INPUT_ACCOUNT";

export const addAccount = (uid, originalAccounts, newAccount) => {
	return async (dispatch) => {
		// send data to database
		const response = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${uid}/basicInfo.json`,
			{
				method: "PATCH",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					accounts: [...originalAccounts, newAccount],
				}),
			}
		);

		if (!response.ok) {
			throw new Error("cannot update accounts");
		}

		dispatch({ type: ADD_ACCOUNT });
	};
};

export const deleteAccount = (uid, account, accountsList) => {
	return async (dispatch) => {
		const newAccountsList = accountsList.filter((item) => item != account);

		const response = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${uid}/basicInfo.json`,
			{
				method: "PATCH",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					accounts: [...newAccountsList],
				}),
			}
		);

		if (!response.ok) {
			throw new Error("cannot update accounts");
		}

		dispatch({ type: DELETE_ACCOUNT });
	};
};

export const inputAccountChange = (input) => {
	return { type: INPUT_ACCOUNT_CHANGE, input: input };
};

export const resetInputAccount = () => {
	return { type: RESET_INPUT_ACCOUNT };
};
