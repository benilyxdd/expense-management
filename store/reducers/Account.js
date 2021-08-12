import { INPUT_ACCOUNT_CHANGE, RESET_INPUT_ACCOUNT } from "../actions/Account";

const initState = {
	inputAccount: "",
};

const AccountReducer = (state = initState, action) => {
	switch (action.type) {
		case INPUT_ACCOUNT_CHANGE:
			return { ...state, inputAccount: action.input };
		case RESET_INPUT_ACCOUNT:
			return { ...state, inputAccount: "" };
		default:
			return state;
	}
};

export default AccountReducer;
