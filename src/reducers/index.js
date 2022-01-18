import { combineReducers } from "redux";
import { catalogueReducer } from "./catalogueReducer";
import { drawerReducer } from "./drawerReducer";
import { cartReducer } from "./cartReducer";

export default combineReducers({
	products: catalogueReducer,
	isDrawerOpen: drawerReducer,
	cart: cartReducer,
});
