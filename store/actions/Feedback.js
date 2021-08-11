import { FIREBASE_PROJECT_ID } from "@env";
import { Alert } from "react-native";

export const DETAIL_CHANGE = "DETAIL_CHANGE";
export const RESET_INPUT = "RESET_INPUT";
export const SUBJECT_CHANGE = "SUBJECT_CHANGE";
export const SUBMIT_FEEDBACK = "SUBMIT_FEEDBACK";

export const detailChange = (input) => {
	return { type: DETAIL_CHANGE, input: input };
};

export const resetInput = () => {
	return { type: RESET_INPUT };
};

export const subjectChange = (input) => {
	return { type: SUBJECT_CHANGE, input: input };
};

export const submitFeedback = (uid, subject, detail) => {
	return async (dispatch) => {
		const response = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/feedback.json`,
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					uid,
					subject,
					detail,
				}),
			}
		);

		if (!response.ok) {
			throw new Error("cannot send feedback");
		}

		Alert.alert("Success", "Thank you for your feedback!");
		dispatch({ type: SUBMIT_FEEDBACK });
	};
};
