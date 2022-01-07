import React from "react";
import { Router, Route } from "react-router-dom";

import Products from "./Products";
import Delivery from "./Delivery";
import Payment from "./Payment";
import Review from "./Review";

import history from "../history";

const App = () => {
	return (
		<Router history={history}>
			<div>
				<Route path="/" exact component={Products} />
				<Route path="/delivery" exact component={Delivery} />
				<Route path="/payment" exact component={Payment} />
				<Route path="/review" exact component={Review} />
			</div>
		</Router>
	);
};

export default App;
