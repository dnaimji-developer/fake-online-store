import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { closeDrawer } from "../../actions";
import "../../sass/Cart.scss";

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
			<h2>CART</h2>
		</div>
	);
};

export default connect(null, { closeDrawer })(Cart);
