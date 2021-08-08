import { INPUT_CATEGORY_CHANGE } from "../actions/Category";

const initState = {
	inputCategory: "",
};

const CategoryReducer = (state = initState, action) => {
	switch (action.type) {
		case INPUT_CATEGORY_CHANGE:
			return { ...state, inputCategory: action.input };
		default:
			return state;
	}
};

export default CategoryReducer;
