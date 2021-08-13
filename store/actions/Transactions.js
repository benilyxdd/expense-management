import { FIREBASE_PROJECT_ID } from "@env";

export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DETAIL_ACCOUNT_CHANGE = "DETAIL_ACCOUNT_CHANGE";
export const DETAIL_AMOUNT_CHANGE = "DETAIL_AMOUNT_CHANGE";
export const DETAIL_CATEGORY_CHANGE = "DETAIL_CATEGORY_CHANGE";
export const DETAIL_DATE_CHANGE = "DETAIL_DATE_CHANGE";
export const DETAIL_DESCRIPTION_CHANGE = "DETAIL_DESCRIPTION_CHANGE";
export const FETCH_ALL_TRANSACTIONS = "FETCH_ALL_TRANSACTIONS";
export const LOADING = "LOADING";
export const RESET_INPUT = "RESET_INPUT";
// export const SIMPLE_INPUT_CHANGE = "SIMPLE_INPUT_CHANGE";

export const addTransaction = (detailInput, uid, userBasicInfo) => {
	return async (dispatch) => {
		dispatch({ type: LOADING, payload: true });

		const transactionDetail = {
			date: detailInput.date,
			amount: detailInput.amount,
			description: detailInput.description,
			category: detailInput.category,
			account: detailInput.account,
		};

		// send transaction
		const response = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${uid}/transactions.json`,
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(transactionDetail),
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

		// update users total expenses
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

		// send transaction to user account (eg. bank / cash)
		const response4 = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${uid}/transactions_in_categories/${detailInput.account}/data.json`,
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(transactionDetail),
			}
		);

		if (!response4.ok) {
			dispatch({ type: LOADING, payload: false });
			throw new Error("cannot update transaction in categories");
		}

		// update users's account totals

		// get all transactions from current user
		const response3 = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${uid}/transactions.json`,
			{
				method: "GET",
			}
		);

		let allTransactionsData = await response3.json();
		allTransactionsData = allTransactionsData
			? Object.values(allTransactionsData)
			: [];

		dispatch({ type: ADD_TRANSACTION, payload: allTransactionsData });
	};
};

export const detailAccountChange = (input) => {
	return { type: DETAIL_ACCOUNT_CHANGE, input: input };
};

export const detailAmountChange = (input) => {
	return { type: DETAIL_AMOUNT_CHANGE, input: input };
};

export const detailCategoryChange = (input) => {
	return { type: DETAIL_CATEGORY_CHANGE, input: input };
};

export const detailDateChange = (input) => {
	return { type: DETAIL_DATE_CHANGE, input: input };
};

export const detailDescriptionChange = (input) => {
	return { type: DETAIL_DESCRIPTION_CHANGE, input: input };
};

export const fetchAllTransactions = (uid) => {
	return async (dispatch) => {
		const response = await fetch(
			`https://${FIREBASE_PROJECT_ID}.firebasedatabase.app/user/${uid}/transactions.json`,
			{
				method: "GET",
			}
		);

		let allTransactionsData = await response.json();
		allTransactionsData = allTransactionsData
			? Object.values(allTransactionsData)
			: [];

		dispatch({
			type: FETCH_ALL_TRANSACTIONS,
			payload: allTransactionsData,
		});
	};
};

export const resetInput = () => {
	return { type: RESET_INPUT };
};

// export const simpleInputChange = (input) => {
// 	return { type: SIMPLE_INPUT_CHANGE, input: input };
// };
