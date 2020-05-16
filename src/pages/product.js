import React from "react";
import Layout from "../components/Layout";
import ProductDetails from "../components/ProductDetails";
import MainProduct from "../components/MainProduct";
import RelatedProducts from "../components/RelatedProducts";

// Sample Props :

const description =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque libero eget pulvinar vestibulum. Nulla egestas pellentesque molestie. Fusce neque turpis, porttitor id metus et, efficitur viverra ligula. Donec fringilla eget purus ut placerat. Nam pharetra mauris non ornare semper.";

const additionalInfo = {
	weight: "100",
	dimensions: [200, 400, 200],
	title: "Cheese per 100gm",
	nutrition: [
		{
			name: "Protein",
			percent: 15,
		},
		{
			name: "Calories",
			percent: 36,
		},
		{
			name: "Fat",
			percent: 15,
		},
		{
			name: "Carbohydrate",
			percent: 44,
		},
	],
	facts: [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque libero eget pulvinar vestibulum. Nulla egestas pellentesque molestie. Fusce neque turpis.",
		"I am Manan",
		"Jaaammmmmeeeee",
	],
};

const comments = [
	{
		author: "John Doe",
		date: "27 April 2019",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque libero eget pulvinar vestibulum. Nulla egestas pellentesque molestie. Fusce neque turpis ",
	},
	{
		author: "John Doe",
		date: "27 April 2019",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque libero eget pulvinar vestibulum. Nulla egestas pellentesque molestie. Fusce neque turpis ",
	},
	{
		author: "John Doe",
		date: "27 April 2019",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque libero eget pulvinar vestibulum. Nulla egestas pellentesque molestie. Fusce neque turpis ",
	},
];

const Product = () => {
	return (
		<Layout heading="Our Store" subHeading="home/ shop">
			<MainProduct />
			<ProductDetails
				comments={comments}
				additionalInfo={additionalInfo}
				description={description}
			/>
			<RelatedProducts />
		</Layout>
	);
};

export default Product;
