export const SIMPLE_INPUT_CHANGE = "SIMPLE_INPUT_CHANGE";
export const DETAIL_AMOUNT_CHANGE = "DETAIL_AMOUNT_CHANGE";
export const DETAIL_DESCRIPTION_CHANGE = "DETAIL_DESCRIPTION_CHANGE";
export const RESET_INPUT = "RESET_INPUT";

export const simpleInputChange = (input) => {
	return { type: SIMPLE_INPUT_CHANGE, input: input };
};

export const detailAmountChange = (input) => {
	return { type: DETAIL_AMOUNT_CHANGE, input: input };
};

export const detailDescriptionChange = (input) => {
	return { type: DETAIL_DESCRIPTION_CHANGE, input: input };
};

export const resetInput = () => {
	return { type: RESET_INPUT };
};
