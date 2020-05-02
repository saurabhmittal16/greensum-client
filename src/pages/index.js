import React from "react";
import NavBar from "../components/Header/NavBar";
import Banner from "../components/LandingPage/Banner";
import Search from "../components/LandingPage/Search";
import Featured from "../components/LandingPage/FeaturedProducts";
import Footer from "../components/Footer";
import HottestDeal from "../components/HottestDeal";
// import { connect } from "react-redux";

const Home = () => {
	return (
		<React.Fragment>
			<NavBar />
			<div className='container main'>
				<Banner />
				<Search />
				<Featured />
				<HottestDeal />
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
