import React from "react";

import "../../sass/Hero.scss";
import background from "../../images/background.jpg";

const Hero = () => {
	return (
		<div
			className="hero"
			style={{ backgroundImage: `url(${background})` }}
		></div>
	);
};

export default Hero;
