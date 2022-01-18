import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import { closeDrawer } from "../../../actions";
import "../../../sass/Cart.scss";

const Cart = ({ closeDrawer }) => {
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			const cartBtns = document.querySelectorAll(".btn--cart");
			for (let index = 0; index < cartBtns.length; index++) {
				if (cartBtns[index].contains(event.target)) {
					return;
				}
			}
			closeDrawer();
		};

		document.body.addEventListener("click", onBodyClick, { capture: true });

		return () => {
			document.body.removeEventListener("click", onBodyClick, {
				capture: true,
			});
		};
	}, [closeDrawer]);

	return (
		<div ref={ref} className="cart">
			<CartItems />
			<CartTotal />
		</div>
	);
};

export default connect(null, { closeDrawer })(Cart);
