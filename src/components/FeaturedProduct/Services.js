import React, { Component } from "react";
import { CardServices } from "./Card";
import { Card } from "semantic-ui-react";

export default class Services extends Component {
	contents = [
		{
			header: "Lorem Ipsum Dolor Sit Amet",
			image: "truck",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			color: "#FFFBC8",
		},
		{
			header: "Lorem Ipsum Dolor Sit Amet",
			image: "clock outline",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			color: "#EDFCF9",
		},
		{
			header: "Lorem Ipsum Dolor Sit Amet",
			image: "file text",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			color: "#DFF9D9",
		},
	];
	render() {
		return (
			<Card.Group centered style={{ marginBottom: "50px" }}>
				{this.contents.map((content, i) => (
					<CardServices
						header={content.header}
						description={content.description}
						color={content.color}
						key={i}
					/>
				))}
			</Card.Group>
		);
	}
}
