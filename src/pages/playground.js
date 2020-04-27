import React from "react";
import Layout from "../components/Layout";
import ProductListView from "../components/AllProducts/ListView";

const Playground = () => {
	return (
		<Layout>
			<h1>Test your components here</h1>
			<ProductListView
				data = {[
					{image: "/test-images/productImg.png", name: "Lorem Ipsum", price: "169", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet erat nec lorem auctor fermentum nec sit amet ipsum. Etiam tempus id mauris quis interdum. Ut vestibulum posuere bibendum."},
					{image: "/test-images/productImg.png", name: "Lorem Ipsum", price: "169", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet erat nec lorem auctor fermentum nec sit amet ipsum. Etiam tempus id mauris quis interdum. Ut vestibulum posuere bibendum."},
					{image: "/test-images/productImg.png", name: "Lorem Ipsum", price: "169", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet erat nec lorem auctor fermentum nec sit amet ipsum. Etiam tempus id mauris quis interdum. Ut vestibulum posuere bibendum."},
					{image: "/test-images/productImg.png", name: "Lorem Ipsum", price: "169", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet erat nec lorem auctor fermentum nec sit amet ipsum. Etiam tempus id mauris quis interdum. Ut vestibulum posuere bibendum."},
				]}
			/>
		</Layout>
	);
};

export default Playground;
