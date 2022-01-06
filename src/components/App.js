import React from "react";

import Products from "./Products";
import Delivery from "./Delivery";
import Payment from "./Payment";
import Review from "./Review";

const App = () => {
	return (
		<div>
			<Products />
			<Delivery />
			<Payment />
			<Review />
		</div>
	);
};

export default App;
