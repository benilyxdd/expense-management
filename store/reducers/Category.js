import {
	INPUT_CATEGORY_CHANGE,
	RESET_INPUT_CATEGORY,
} from "../actions/Category";

const initState = {
	inputCategory: "",
};

const CategoryReducer = (state = initState, action) => {
	switch (action.type) {
		case INPUT_CATEGORY_CHANGE:
			return { ...state, inputCategory: action.input };
		case RESET_INPUT_CATEGORY:
			return { ...state, inputCategory: "" };
		default:
			return state;
	}
};

export default CategoryReducer;
