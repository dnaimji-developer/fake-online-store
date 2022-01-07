import React from "react";
import { connect } from "react-redux";

import { fetchItems } from "../../actions";

class Catalogue extends React.Component {
	componentDidMount() {
		this.props.fetchItems();
	}

	render() {
		return <h2>Catalogue</h2>;
	}
}

export default connect(null, { fetchItems })(Catalogue);
