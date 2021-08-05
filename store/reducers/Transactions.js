import {
	// SIMPLE_INPUT_CHANGE,
	RESET_INPUT,
	DETAIL_AMOUNT_CHANGE,
	DETAIL_DESCRIPTION_CHANGE,
	DETAIL_DATE_CHANGE,
	DETAIL_CATEGORY_CHANGE,
	ADD_TRANSACTION,
	LOADING,
} from "../actions/Transactions";

const initialState = {
	// simpleInput: "",
	detailInput: {
		amount: "",
		description: "",
		date: "",
		category: "",
	},
	isLoading: false,
};

const TransactionsRedcuer = (state = initialState, action) => {
	switch (action.type) {
		// case SIMPLE_INPUT_CHANGE:
		// 	return { ...state, simpleInput: action.input };
		case RESET_INPUT:
			return {
				...state,
				// simpleInput: "",
				detailInput: {
					amount: "",
					description: "",
					date:
						new Date().toLocaleDateString() +
						" " +
						new Date().toLocaleTimeString(),
				},
				isLoading: false,
			};
		case DETAIL_AMOUNT_CHANGE:
			return {
				...state,
				detailInput: {
					...state.detailInput,
					amount: action.input,
				},
			};
		case DETAIL_DESCRIPTION_CHANGE:
			return {
				...state,
				detailInput: {
					...state.detailInput,
					description: action.input,
				},
			};
		case DETAIL_DATE_CHANGE:
			return {
				...state,
				detailInput: { ...state.detailInput, date: action.input },
			};
		case ADD_TRANSACTION:
			return {
				...state,
				detailInput: {
					amount: "",
					description: "",
					date:
						new Date().toLocaleDateString() +
						" " +
						new Date().toLocaleTimeString(),
				},
				isLoading: false,
			};
		case LOADING:
			return { ...state, isLoading: action.payload };
		case DETAIL_CATEGORY_CHANGE:
			return {
				...state,
				detailInput: { ...state.detailInput, category: action.input },
			};
		default:
			return state;
	}
};

export default TransactionsRedcuer;
