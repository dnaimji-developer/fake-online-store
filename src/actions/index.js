import FakeStoreAPI from "../api/FakeStoreAPI";
import nextId from "react-id-generator";

import {
	FETCH_ITEMS,
	OPEN_DRAWER,
	CLOSE_DRAWER,
	TOGGLE_DRAWER,
	ADD_CART_ITEM,
	REMOVE_CART_ITEM,
	EMPTY_CART,
} from "./types";

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

export const addCartItem = (productID) => {
	return {
		type: ADD_CART_ITEM,
		payload: { cartItemID: nextId(), productID },
	};
};

export const removeCartItem = (cartItemID) => {
	return {
		type: REMOVE_CART_ITEM,
		payload: cartItemID,
	};
};

export const emptyCart = () => {
	return {
		type: EMPTY_CART,
	};
};
