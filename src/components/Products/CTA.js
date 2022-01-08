import React from "react";

import "../../sass/CTA.scss";

const CTA = () => {
	return (
		<div className="cta">
			<div className="cta__banner">Random Fake Products</div>
			<a className="link" href="/#main__content__catalogue">
				<button className="ui black button">SHOP</button>
			</a>
		</div>
	);
};

export default CTA;
