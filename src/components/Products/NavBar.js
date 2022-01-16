import React from "react";
import { connect } from "react-redux";

import { toggleDrawer } from "../../actions";
import "../../sass/NavBar.scss";

const NavBar = ({ toggleDrawer }) => {
	return (
		<div className="navbar">
			<div className="navbar__brand">
				<h2 className="ui header">DASRI'S FAKE ONLINE STORE</h2>
			</div>
			<div className="navbar__btn">
				<button className="ui black button btn--cart" onClick={toggleDrawer}>
					CART
				</button>
			</div>
		</div>
	);
};

export default connect(null, { toggleDrawer })(NavBar);
