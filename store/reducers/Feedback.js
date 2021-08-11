import { DETAIL_CHANGE, SUBJECT_CHANGE } from "../actions/Feedback";

const initState = {
	subject: "",
	detail: "",
};

const FeedbackReducer = (state = initState, action) => {
	switch (action.type) {
		case DETAIL_CHANGE:
			return { ...state, detail: action.input };
		case SUBJECT_CHANGE:
			return { ...state, subject: action.input };
		default:
			return state;
	}
};

export default FeedbackReducer;
