import React from "react";

import "../../sass/NavBar.scss";

const NavBar = () => {
	return (
		<div className="navbar">
			<div className="navbar__brand">
				<h2 className="ui header">DASRI'S FAKE ONLINE STORE</h2>
			</div>
			<div className="navbar__btn">
				<button className="ui black button btn--cart">CART</button>
			</div>
		</div>
	);
};

export default NavBar;
