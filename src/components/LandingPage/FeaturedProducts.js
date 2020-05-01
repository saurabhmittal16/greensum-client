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
		this.setState((state) => ({ liked: !state.liked }));
	};
	render() {
		return (
			<div>
				<div className="prod-container">
					<Icon
						name={this.state.liked ? "heart" : "heart outline"}
						color="red"
						style={{ display: "inline", cursor: "pointer" }}
						onClick={this.like}
					/>
					<img className="prod-img" src={this.props.src} />
				</div>
				<div className="prod-info">
					<span> {this.props.name}</span>
					<br />
					<strong> &#8377; {this.props.cost}/-</strong>
				</div>
			</div>
		);
	}
}

export default function FeaturedProducts(props) {
	const data = props.data;
	return (
		<Segment basic className="feat-prod-container">
			<div style={{ fontSize: 40, marginBottom: 40 }} >Featured Products</div>
			<Grid stackable columns={2}>
				{data.map((item, index) => (
					<Grid.Column key={`featured_${index}`} >
						<Product
							src={item.src}
							name={item.name}
							cost={item.cost}
						/>
					</Grid.Column>
				))}
				;
			</Grid>
		</Segment>
	);
}

FeaturedProducts.defaultProps = {
	data: [
		{
			src: "/test-images/featprod.png",
			name: "Lorem Ipsum",
			cost: "100",
		},
		{
			src: "/test-images/featprod.png",
			name: "Lorem Ipum",
			cost: "100",
		},
		{
			src: "/test-images/featprod.png",
			name: "Lorem Ipum",
			cost: "100",
		},
		{
			src: "/test-images/featprod.png",
			name: "Lorem Ipum",
			cost: "100",
		},
	],
};
