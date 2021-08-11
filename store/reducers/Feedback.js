import {
	DETAIL_CHANGE,
	RESET_INPUT,
	SUBJECT_CHANGE,
	SUBMIT_FEEDBACK,
} from "../actions/Feedback";

const initState = {
	subject: "",
	detail: "",
};

const FeedbackReducer = (state = initState, action) => {
	switch (action.type) {
		case DETAIL_CHANGE:
			return { ...state, detail: action.input };
		case RESET_INPUT:
			return { ...state, subject: "", detail: "" };
		case SUBJECT_CHANGE:
			return { ...state, subject: action.input };
		case SUBMIT_FEEDBACK:
			return { ...state, subject: "", detail: "" };
		default:
			return state;
	}
};

export default FeedbackReducer;
