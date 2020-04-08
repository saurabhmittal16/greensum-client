import React from "react";
import ViewCard from "./ViewCard";

import { Container } from "semantic-ui-react";

class RecentlyViewed extends React.Component {
	name = "Lorem Ipsum";
	price = "Rs. 123";
	toLink = "#";
	src = "";

	render() {
		return (
			<Container className="recently-viewed_index">
				<ViewCard
					src="https://www.freedigitalphotos.net/images/img/homepage/394230.jpg"
					type="wide"
					name={this.name}
					price={this.price}
					to={this.toLink}
				/>
				<ViewCard
					src={"https://static.toiimg.com/photo/72975551.cms"}
					type="narrow"
					name={this.name}
					price={this.price}
					to={this.toLink}
				/>
				<ViewCard
					src="https://static.toiimg.com/photo/72975551.cms"
					type="narrow"
					name={this.name}
					price={this.price}
					to={this.toLink}
				/>
				<ViewCard
					src="https://www.freedigitalphotos.net/images/img/homepage/394230.jpg"
					type="wide"
					name={this.name}
					price={this.price}
					to={this.toLink}
				/>
			</Container>
		);
	}
}

export default RecentlyViewed;
