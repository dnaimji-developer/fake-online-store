import React from "react";

import NavBar from "./NavBar";
import Hero from "./Hero";
import CTA from "./CTA";
import Catalogue from "./Catalogue/Catalogue";
import Cart from "./Cart";
import "../../sass/Products.scss";

const Products = () => {
	return (
		<article className="products">
			<header className="header">
				<NavBar />
			</header>
			<main className="main">
				<section className="main__content">
					<div className="main__content__hero">
						<Hero />
					</div>
					<div className="main__content__cta">
						<CTA />
					</div>
					<div
						id="main__content__catalogue"
						className="main__content__catalogue"
					>
						<Catalogue />
					</div>
				</section>
				<section className={`main__drawer drawer--closed`}>
					<Cart />
				</section>
			</main>
		</article>
	);
};

export default Products;
