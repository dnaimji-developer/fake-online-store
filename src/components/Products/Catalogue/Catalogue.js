import React from "react";
import { connect } from "react-redux";

import ProductCard from "./ProductCard";
import { fetchItems } from "../../../actions";
import "../../../sass/Catalogue.scss";

class Catalogue extends React.Component {
	componentDidMount() {
		this.props.fetchItems();
	}

	render() {
		let { products } = this.props;

		if (!products) return;

		const catalogue = products.map((product) => (
			<ProductCard key={product.id} product={product} />
		));

		return (
			<div className="catalogue ui container">
				<div className="catalogue ui three doubling stackable cards">
					{catalogue}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { products: state.products };
};

export default connect(mapStateToProps, { fetchItems })(Catalogue);
