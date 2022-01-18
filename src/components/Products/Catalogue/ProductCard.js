import React from "react";
import { connect } from "react-redux";

import { openDrawer } from "../../../actions";
import "../../../sass/ProductCard.scss";

const Product = ({ product, openDrawer }) => {
	const onButtonClick = () => {
		openDrawer();
	};

	let { title, description, price, image } = product;
	return (
		<div className="ui card">
			<div className="image">
				<img src={image} alt={title}></img>
			</div>
			<div className="content">
				<div className="header">{title}</div>
				<div className="description">
					<p>{description}</p>
					<p>{`$${price.toFixed(2)}`}</p>
				</div>
			</div>
			<div
				className="ui bottom attached button btn--cart"
				onClick={onButtonClick}
			>
				<i className="add icon"></i>
				Add To Cart
			</div>
		</div>
	);
};

export default connect(null, { openDrawer })(Product);
