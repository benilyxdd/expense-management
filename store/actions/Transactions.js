import { FIREBASE_PROJECT_ID } from "@env";

// export const SIMPLE_INPUT_CHANGE = "SIMPLE_INPUT_CHANGE";
export const DETAIL_AMOUNT_CHANGE = "DETAIL_AMOUNT_CHANGE";
export const DETAIL_DESCRIPTION_CHANGE = "DETAIL_DESCRIPTION_CHANGE";
export const RESET_INPUT = "RESET_INPUT";
export const ADD_TRANSACTION = "ADD_TRANSACTION";

// export const simpleInputChange = (input) => {
// 	return { type: SIMPLE_INPUT_CHANGE, input: input };
// };

export const detailAmountChange = (input) => {
	return { type: DETAIL_AMOUNT_CHANGE, input: input };
};

export const detailDescriptionChange = (input) => {
	return { type: DETAIL_DESCRIPTION_CHANGE, input: input };
};

export const resetInput = () => {
	return { type: RESET_INPUT };
};

export const addTransaction = (detailInput, uid) => {
	return async (dispatch) => {
		const response = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${uid}/transactions.json`,
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					amount: detailInput.amount,
					description: detailInput.description,
				}),
			}
		);

		if (!response.ok) {
			throw new Error("cannot send transaction to server");
		}
		dispatch({ type: ADD_TRANSACTION });
	};
};
