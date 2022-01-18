import React from "react";
import { connect } from "react-redux";

import { emptyCart, closeDrawer } from "../../../actions";

const CartTotal = ({ total, emptyCart, closeDrawer }) => {
	const onCheckoutClick = () => {
		alert("Don't worry about it. All your fake products are FREE!");
		emptyCart();
		closeDrawer();
	};

	return (
		<div className="cart__total">
			<div className="cart__total__price">
				<div className="cart__total__price__text">TOTAL:</div>{" "}
				<div className="cart__total__price__value">{`$${total.toFixed(
					2
				)}`}</div>
			</div>
			<div className="cart__total__checkout">
				<button className="ui button" onClick={onCheckoutClick}>
					CHECKOUT
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	let total = 0;
	state.cart.forEach((cartItem) => {
		let product = state.products.find(
			(product) => cartItem.productID === product.id
		);
		total += product.price;
	});
	return { total };
};

export default connect(mapStateToProps, { emptyCart, closeDrawer })(CartTotal);
