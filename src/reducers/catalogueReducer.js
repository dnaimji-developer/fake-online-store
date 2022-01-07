import { FETCH_ITEMS } from "../actions/types";

export const catalogueReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_ITEMS:
			return [...action.payload];
		default:
			return state;
	}
};
