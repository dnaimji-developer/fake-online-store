import React from "react";
import { connect } from "react-redux";

import NavBar from "./NavBar";
import Hero from "./Hero";
import CTA from "./CTA";
import Catalogue from "./Catalogue/Catalogue";
import Cart from "./Cart/Cart.js";
import "../../sass/Products.scss";

const Products = (props) => {
	const isDrawerOpen = props.isDrawerOpen ? "open" : "closed";
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
				<section className={`main__drawer drawer--${isDrawerOpen}`}>
					<Cart />
				</section>
			</main>
		</article>
	);
};

const mapStateToProps = (state) => {
	const isDrawerOpen = state.isDrawerOpen;
	return { isDrawerOpen };
};

export default connect(mapStateToProps)(Products);
