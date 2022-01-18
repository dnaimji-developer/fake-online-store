import { ADD_CART_ITEM, REMOVE_CART_ITEM, EMPTY_CART } from "../actions/types";

export const cartReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_CART_ITEM:
			return [...state, action.payload];
		case REMOVE_CART_ITEM:
			return state.filter((cartItem) => cartItem.cartItemID !== action.payload);
		case EMPTY_CART:
			return [];
		default:
			return state;
	}
};
