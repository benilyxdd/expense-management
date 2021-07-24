import { FIREBASE_PROJECT_ID } from "@env";

export const FETCH_USER_DATA = "FETCH_USER_DATA";

export const fetchUserData = (uid) => {
	return async (dispatch) => {
		const response = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/${uid}`,
			{
				method: "GET",
			}
		);

		if (!response.ok) {
			throw new Error("can't");
		}

		const responseData = await response.json();
		console.log(responseData);
		dispatch({ type: FETCH_USER_DATA, uid: uid });
	};
};
