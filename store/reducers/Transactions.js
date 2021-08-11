import {
	ADD_TRANSACTION,
	DETAIL_AMOUNT_CHANGE,
	DETAIL_CATEGORY_CHANGE,
	DETAIL_DATE_CHANGE,
	DETAIL_DESCRIPTION_CHANGE,
	FETCH_ALL_TRANSACTIONS,
	LOADING,
	RESET_INPUT,
	// SIMPLE_INPUT_CHANGE,
} from "../actions/Transactions";

const initialState = {
	detailInput: {
		amount: "",
		category: "",
		date: "",
		description: "",
	},
	isLoading: false,
	allTransactions: [],
	// simpleInput: "",
};

const TransactionsRedcuer = (state = initialState, action) => {
	switch (action.type) {
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
				allTransactions: action.payload,
			};
		// case SIMPLE_INPUT_CHANGE:
		// 	return { ...state, simpleInput: action.input };
		case DETAIL_AMOUNT_CHANGE:
			return {
				...state,
				detailInput: {
					...state.detailInput,
					amount: action.input,
				},
			};
		case DETAIL_CATEGORY_CHANGE:
			return {
				...state,
				detailInput: { ...state.detailInput, category: action.input },
			};
		case DETAIL_DATE_CHANGE:
			return {
				...state,
				detailInput: { ...state.detailInput, date: action.input },
			};
		case DETAIL_DESCRIPTION_CHANGE:
			return {
				...state,
				detailInput: {
					...state.detailInput,
					description: action.input,
				},
			};
		case FETCH_ALL_TRANSACTIONS:
			return { ...state, allTransactions: action.payload };
		case LOADING:
			return { ...state, isLoading: action.payload };
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
		default:
			return state;
	}
};

export default TransactionsRedcuer;
