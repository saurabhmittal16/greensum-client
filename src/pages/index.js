import React from "react";
import Layout from "../components/Layout";
// import { connect } from "react-redux";
import Playground from "./playground";

const Home = () => {
	return (
		<Layout>
			<h1>Hello World</h1>
			<Playground />
		</Layout>
	);
};

// const mapStateToProps = state => ({
// 	temp: state.temp,
// });

// export default connect(mapStateToProps)(Home);

export default Home;
