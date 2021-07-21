export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const SIMPLE_LOGIN = "SIMPLE_LOGIN";

export const login = (email, password) => {
	return async (dispatch) => {
		// const response = await fetch(
		// 	"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]",
		// 	{
		// 		method: "POST",
		// 		header: {
		// 			"Content-type": "application/json",
		// 		},
		// 		body: JSON.stringify({
		// 			email: email,
		// 			password: password,
		// 			returnSecureToken: true,
		// 		}),
		// 	}
		// );

		// if (!response.ok) {
		// 	throw new Error("no");
		// }

		// const resData = await response.json();
		return { type: LOGIN };
	};
};

export const signup = (email, password) => {
	return { type: SIGNUP, email: email, password: password };
};

export const simpleLogin = () => {
	return { type: SIMPLE_LOGIN };
};
