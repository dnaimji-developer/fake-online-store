import React from "react";
import { connect } from "react-redux";

import { openDrawer, addCartItem } from "../../../actions";
import "../../../sass/ProductCard.scss";

const Product = ({ product, openDrawer, addCartItem }) => {
	let { title, description, price, image, id } = product;

	const onButtonClick = () => {
		openDrawer();
		addCartItem(id);
	};

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

export default connect(null, { openDrawer, addCartItem })(Product);
