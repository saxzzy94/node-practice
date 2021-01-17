import { FETCH_USER } from "../actions/types";
export default function (state = { auth: null }, action) {
	console.log(action);
	switch (action.type) {
		case FETCH_USER:
			return { ...state, auth: action.payload };

		default:
			return state;
	}
}
