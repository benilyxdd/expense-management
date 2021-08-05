import { FIREBASE_PROJECT_ID } from "@env";

// export const SIMPLE_INPUT_CHANGE = "SIMPLE_INPUT_CHANGE";
export const DETAIL_AMOUNT_CHANGE = "DETAIL_AMOUNT_CHANGE";
export const DETAIL_DESCRIPTION_CHANGE = "DETAIL_DESCRIPTION_CHANGE";
export const DETAIL_DATE_CHANGE = "DETAIL_DATE_CHANGE";
export const DETAIL_CATEGORY_CHANGE = "DETAIL_CATEGORY_CHANGE";
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

export const detailCategoryChange = (input) => {
	return { type: DETAIL_CATEGORY_CHANGE, input: input };
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
					category: detailInput.category,
				}),
			}
		);

		if (!response.ok) {
			dispatch({ type: LOADING, payload: false });
			throw new Error("cannot send transaction to server");
		}

		// construct sent data
		const sentData = {
			total: userBasicInfo.total + parseInt(detailInput.amount),
			monthlyBudget:
				userBasicInfo.monthlyBudget + Math.min(0, detailInput.amount),
			income:
				userBasicInfo.income +
				Math.max(0, parseInt(detailInput.amount)),
			expenses:
				userBasicInfo.expenses +
				Math.min(0, parseInt(detailInput.amount)),
		};

		const response2 = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${uid}/basicInfo.json`,
			{
				method: "PATCH",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(sentData),
			}
		);

		if (!response2.ok) {
			dispatch({ type: LOADING, payload: false });
			throw new Error("cannot add amount to total expenses");
		}

		dispatch({ type: ADD_TRANSACTION });
	};
};
