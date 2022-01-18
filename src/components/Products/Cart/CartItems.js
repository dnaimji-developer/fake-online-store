import React from "react";
import { connect } from "react-redux";

import CartItem from "./CartItem";

const CartItems = ({ cart }) => {
	if (cart.length <= 0) {
		return <div className="cart__items">YOUR CART IS EMPTY</div>;
	}

	const cartItems = cart.map((cartItem, index) => (
		<CartItem key={index} item={cartItem} />
	));

	return <div className="cart__items">{cartItems}</div>;
};

const mapStateToProps = (state) => {
	return { cart: state.cart };
};

export default connect(mapStateToProps)(CartItems);
