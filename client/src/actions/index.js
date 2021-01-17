import backend from "../api/backend";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
	const res = await backend.get("/api/current_user");
	dispatch({
		type: FETCH_USER,
		payload: res.data,
	});
};
