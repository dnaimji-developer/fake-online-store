import { combineReducers } from "redux";
import { catalogueReducer } from "./catalogueReducer";
import { drawerReducer } from "./drawerReducer";

export default combineReducers({
	products: catalogueReducer,
	isDrawerOpen: drawerReducer,
});
