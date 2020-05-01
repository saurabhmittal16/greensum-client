import React from "react";
import NavBar from "../components/Header/NavBar";
import Banner from "../components/LandingPage/Banner";
import Search from "../components/LandingPage/Search";
import Featured from "../components/LandingPage/FeaturedProducts";
import LowerHalf from "../components/FeaturedProduct";
import Footer from "../components/Footer";
// import { connect } from "react-redux";

const Home = () => {
	return (
		<React.Fragment>
			<NavBar />
			<div className='container main'>
				<Banner />
				<Search />
				<Featured />
				<LowerHalf />
			</div>
			<Footer />
		</React.Fragment>
	);
};

// const mapStateToProps = state => ({
// 	temp: state.temp,
// });

// export default connect(mapStateToProps)(Home);

export default Home;
