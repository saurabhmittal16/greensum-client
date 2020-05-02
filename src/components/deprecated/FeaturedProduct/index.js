import React, { Component } from "react";
import { HorizontalCard } from "./HorizontalCard";
import Services from "./Services";
import { NeverMissBar } from "./NeverMissBar";
import { ChooseUs } from "./ChooseUs";

export default class index extends Component {
	render() {
		return (
			<React.Fragment>
				{/* <div className="FeaturesProduct_Heading">Featured Products</div> */}
				<HorizontalCard />
				<div className="FeaturesProduct_Heading">Our Services</div>
				<Services />
				<NeverMissBar />
				<ChooseUs />
			</React.Fragment>
		);
	}
}
