import React from "react";
import Layout from "../components/Layout";
import MainProduct from "../components/MainProduct";
import Review from "../components/Review";
import Related from "../components/Related";

const Shop = () => {
	return (
		<Layout>
			<MainProduct />
			<Review />
			<Related />
		</Layout>
	);
};

export default Shop;
