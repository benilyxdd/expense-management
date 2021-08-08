import { FIREBASE_PROJECT_ID } from "@env";

export const ADD_CATEGORY = "ADD_CATEGORY";

export const addCategory = (
	uid,
	originalCategories,
	newCategory,
	navigation
) => {
	return async (dispatch) => {
		// send data to database
		const response = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${uid}/basicInfo.json`,
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					categories: [...originalCategories, newCategory],
				}),
			}
		);

		if (!response.ok) {
			throw new Error("cannot update categories");
		}

        dispatch({ type: ADD_CATEGORY });
        navigation.goBack();
	};
};
