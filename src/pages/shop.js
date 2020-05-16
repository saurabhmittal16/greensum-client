import React from "react";
import Layout from "../components/Layout";
import RecentlyViewed from "../components/RecentlyViewed";
import ProductListView from "../components/AllProducts/ListView";
import RelatedProducts from "../components/RelatedProducts";

const Shop = () => {
	return (
		<Layout
			heading="Our Store"
			subHeading="home/ shop"
		>
			<RecentlyViewed />
			<ProductListView
				data={[
					{ image: "/test-images/productImg.png", name: "Lorem Ipsum", price: "169", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet erat nec lorem auctor fermentum nec sit amet ipsum. Etiam tempus id mauris quis interdum. Ut vestibulum posuere bibendum." },
					{ image: "/test-images/productImg.png", name: "Lorem Ipsum", price: "169", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet erat nec lorem auctor fermentum nec sit amet ipsum. Etiam tempus id mauris quis interdum. Ut vestibulum posuere bibendum." },
					{ image: "/test-images/productImg.png", name: "Lorem Ipsum", price: "169", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet erat nec lorem auctor fermentum nec sit amet ipsum. Etiam tempus id mauris quis interdum. Ut vestibulum posuere bibendum." },
					{ image: "/test-images/productImg.png", name: "Lorem Ipsum", price: "169", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet erat nec lorem auctor fermentum nec sit amet ipsum. Etiam tempus id mauris quis interdum. Ut vestibulum posuere bibendum." },
				]}
			/>
			<RelatedProducts />
		</Layout>
	);
};

export default Shop;
