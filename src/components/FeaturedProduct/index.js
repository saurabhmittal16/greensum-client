import React, { Component } from "react";
import { ProductGrid } from "./ProductGrid";
import { HorizontalCard } from "./HorizontalCard";
import Services from "./Services";

export default class index extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="FeaturesProduct_Heading">Featured Products</div>
				<ProductGrid />
				<HorizontalCard />
				<div className="FeaturesProduct_Heading">Our Services</div>
				<Services />
			</React.Fragment>
		);
	}
}
