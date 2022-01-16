import FakeStoreAPI from "../api/FakeStoreAPI";
import { FETCH_ITEMS, OPEN_DRAWER, CLOSE_DRAWER, TOGGLE_DRAWER } from "./types";

export const fetchItems = () => async (dispatch) => {
	const { data } = await FakeStoreAPI.get("/products");
	dispatch({
		type: FETCH_ITEMS,
		payload: data,
	});
};

export const openDrawer = () => {
	return { type: OPEN_DRAWER };
};

export const closeDrawer = () => {
	return { type: CLOSE_DRAWER };
};

export const toggleDrawer = () => {
	return { type: TOGGLE_DRAWER };
};
