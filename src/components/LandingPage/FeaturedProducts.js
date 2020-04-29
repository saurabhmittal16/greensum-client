import React from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			liked: false,
		};
	}
	like = () => {
		this.setState({ liked: !this.state.liked });
	};
	render() {
		return (
			<div>
				<div
					style={{
						display: "flex",
					}}
				>
					<Icon
						name={this.state.liked ? "heart" : "heart outline"}
						color="red"
						style={{ display: "inline", cursor: "pointer" }}
						onClick={this.like}
					/>
					<img
						style={{
							width: "100%",
							display: "inline",
						}}
						src="/test-images/featprod.png"
					/>
				</div>
				<div
					style={{
						float: "left",
						margin: "0.7rem 1.5rem",
						marginBottom: "0",
						textAlign: "left",
					}}
				>
					<span> Lorem ipsum</span>
					<br />
					<strong> &#8377; 169/-</strong>
				</div>
			</div>
		);
	}
}

export default function FeaturedProducts() {
	return (
		<Segment
			basic
			style={{
				width: "70%",
				margin: "7em auto",
				textAlign: "center",
			}}
		>
			<h2>Featured Products</h2>
			<Grid columns={2}>
				<Grid.Row>
					<Grid.Column>
						<Product />
					</Grid.Column>
					<Grid.Column>
						<Product />
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						<Product />
					</Grid.Column>
					<Grid.Column>
						<Product />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
}
