import React from "react";
import { Icon, Button } from "semantic-ui-react";
import { connect } from "react-redux";

class Home extends React.Component {
	render() {
		return (
			<div>
				<Icon size="massive" name="world" />
				<Button>{this.props.temp.message}</Button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	temp: state.temp,
});

export default connect(mapStateToProps)(Home);
