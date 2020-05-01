import React from "react";
import ViewCard from "./ViewCard";

class RecentlyViewed extends React.Component {
	name = "Lorem Ipsum";
	price = "Rs. 123";
	toLink = "#";
	src = "";

	render() {
		return (
			<div className="recently-viewed_index">
				<ViewCard
					src="/test-images/rectangle1.png"
					type="wide"
					name={this.name}
					price={this.price}
					to={this.toLink}
				/>
				<ViewCard
					src="/test-images/rectangle2.png"
					type="narrow"
					name={this.name}
					price={this.price}
					to={this.toLink}
				/>
				<ViewCard
					src="/test-images/rectangle2.png"
					type="narrow"
					name={this.name}
					price={this.price}
					to={this.toLink}
				/>
				<ViewCard
					src="/test-images/rectangle2.png"
					type="wide"
					name={this.name}
					price={this.price}
					to={this.toLink}
				/>
			</div>
		);
	}
}

export default RecentlyViewed;
