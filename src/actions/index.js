import FakeStoreAPI from "../api/FakeStoreAPI";
import { FETCH_ITEMS } from "./types";

export const fetchItems = () => async (dispatch) => {
	const { data } = await FakeStoreAPI.get("/products");
	dispatch({
		type: FETCH_ITEMS,
		payload: data,
	});
};
