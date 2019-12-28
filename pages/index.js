import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";

class Home extends React.Component {
	render() {
		return <Button>{this.props.temp.message}</Button>;
	}
}

const mapStateToProps = state => ({
	temp: state.temp,
});

export default connect(mapStateToProps)(Home);
