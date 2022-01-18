import React from "react";
import { connect } from "react-redux";

import { removeCartItem } from "../../../actions";

const CartItem = ({ product, cartItemID, removeCartItem }) => {
	let { title, price, image } = product;

	return (
		<div className="cart__item">
			<div className="cart__item__image">
				<img src={image} alt={title}></img>
			</div>
			<div className="cart__item__info">
				<div className="cart__item__info__text">
					<div className="cart__item__info__text__name">{title}</div>
				</div>
				<div className="cart__item__info__price">{`$${price.toFixed(2)}`}</div>
			</div>
			<div className="cart__item__remove">
				<i
					className="close icon"
					onClick={() => removeCartItem(cartItemID)}
				></i>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const product = state.products.find(
		(product) => ownProps.item.productID === product.id
	);
	const cartItemID = ownProps.item.cartItemID;
	return { product, cartItemID };
};

export default connect(mapStateToProps, {
	removeCartItem,
})(CartItem);
