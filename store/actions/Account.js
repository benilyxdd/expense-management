export const INPUT_ACCOUNT_CHANGE = "INPUT_ACCOUNT_CHANGE";
export const RESET_INPUT_ACCOUNT = "RESET_INPUT_ACCOUNT";

export const inputAccountChange = (input) => {
	return { type: INPUT_ACCOUNT_CHANGE, input: input };
};

export const resetInputAccount = () => {
	return { type: RESET_INPUT_ACCOUNT };
};
