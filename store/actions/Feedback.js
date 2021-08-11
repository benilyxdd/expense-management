import { FIREBASE_PROJECT_ID } from "@env";

export const DETAIL_CHANGE = "DETAIL_CHANGE";
export const SUBJECT_CHANGE = "SUBJECT_CHANGE";

export const detailChange = (input) => {
	return { type: DETAIL_CHANGE, input: input };
};

export const subjectChange = (input) => {
	return { type: SUBJECT_CHANGE, input: input };
};
