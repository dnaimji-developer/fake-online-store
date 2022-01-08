import React from "react";

import NavBar from "./NavBar";
import Hero from "./Hero";
import CTA from "./CTA";
import Catalogue from "./Catalogue";
import Cart from "./Cart";

const Products = () => {
	return (
		<div>
			<h1>PRODUCTS</h1>
			<NavBar />
			<Hero />
			<CTA />
			<Catalogue />
			<Cart />
		</div>
	);
};

export default Products;
