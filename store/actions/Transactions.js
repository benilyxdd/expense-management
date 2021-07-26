import { FIREBASE_PROJECT_ID } from "@env";

// export const SIMPLE_INPUT_CHANGE = "SIMPLE_INPUT_CHANGE";
export const DETAIL_AMOUNT_CHANGE = "DETAIL_AMOUNT_CHANGE";
export const DETAIL_DESCRIPTION_CHANGE = "DETAIL_DESCRIPTION_CHANGE";
export const DETAIL_DATE_CHANGE = "DETAIL_DATE_CHANGE";
export const RESET_INPUT = "RESET_INPUT";
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const LOADING = "LOADING";

// export const simpleInputChange = (input) => {
// 	return { type: SIMPLE_INPUT_CHANGE, input: input };
// };

export const detailAmountChange = (input) => {
	return { type: DETAIL_AMOUNT_CHANGE, input: input };
};

export const detailDescriptionChange = (input) => {
	return { type: DETAIL_DESCRIPTION_CHANGE, input: input };
};

export const detailDateChange = (input) => {
	return { type: DETAIL_DATE_CHANGE, input: input };
};

export const resetInput = () => {
	return { type: RESET_INPUT };
};

export const addTransaction = (detailInput, uid, userBasicInfo) => {
	return async (dispatch) => {
		dispatch({ type: LOADING, payload: true });
		const response = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${uid}/transactions.json`,
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					date: detailInput.date,
					amount: detailInput.amount,
					description: detailInput.description,
				}),
			}
		);

		if (!response.ok) {
			dispatch({ type: LOADING, payload: false });
			throw new Error("cannot send transaction to server");
		}

		const response2 = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${uid}/basicInfo.json`,
			{
				method: "PATCH",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					expenses:
						userBasicInfo.expenses + parseInt(detailInput.amount),
					total: userBasicInfo.total + parseInt(detailInput.amount),
					monthlyBudget:
						userBasicInfo.monthlyBudget +
						Math.min(0, detailInput.amount),
				}),
			}
		);

		if (!response2.ok) {
			dispatch({ type: LOADING, payload: false });
			throw new Error("cannot add amount to total expenses");
		}

		dispatch({ type: ADD_TRANSACTION });
	};
};
