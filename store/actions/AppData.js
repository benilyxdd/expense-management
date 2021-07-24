import { FIREBASE_PROJECT_ID } from "@env";

export const FETCH_USER_DATA = "FETCH_USER_DATA";

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
