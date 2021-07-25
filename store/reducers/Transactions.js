import {
	// SIMPLE_INPUT_CHANGE,
	RESET_INPUT,
	DETAIL_AMOUNT_CHANGE,
	DETAIL_DESCRIPTION_CHANGE,
	ADD_TRANSACTION,
} from "../actions/Transactions";

const initialState = {
	// simpleInput: "",
	detailInput: {
		amount: "",
		description: "",
	},
};

const TransactionsRedcuer = (state = initialState, action) => {
	switch (action.type) {
		// case SIMPLE_INPUT_CHANGE:
		// 	return { ...state, simpleInput: action.input };
		case RESET_INPUT:
			return {
				...state,
				// simpleInput: "",
				detailInput: { amount: "", description: "" },
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
		case ADD_TRANSACTION:
			return { ...state, detailInput: { amount: "", description: "" } };
		default:
			return state;
	}
};

export default TransactionsRedcuer;
