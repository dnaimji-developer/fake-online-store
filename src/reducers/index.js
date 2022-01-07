import { combineReducers } from "redux";
import { catalogueReducer } from "./catalogueReducer";

export default combineReducers({
	products: catalogueReducer,
});
