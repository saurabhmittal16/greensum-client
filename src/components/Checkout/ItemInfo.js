import React from "react";
import { Container, Image, Grid, Icon } from "semantic-ui-react";

export default function ItemInfo(props) {
	var data = props.data;

	return (
		<Container className="item-info__parent">
			<div className="item-info__headers">
				<Grid>
					<Grid.Column width={8}> Item Name</Grid.Column>
					<Grid.Column width={2} textAlign="right">
						Price
					</Grid.Column>
					<Grid.Column width={6} textAlign="right">
						Actions
					</Grid.Column>
				</Grid>
			</div>
			<Grid verticalAlign="middle" divided="vertically">
				{data.map((item) => (
					<Grid.Row key={item.key}>
						<Grid
							stackable
							verticalAlign="middle"
							style={{ width: "100%" }}
						>
							<Grid.Row>
								<Grid.Column width={4}>
									<Image bordered src={item.img} />
								</Grid.Column>
								<Grid.Column width={4}>
									<h2>{item.heading}</h2>
									<p>{item.info}</p>
								</Grid.Column>
								<Grid.Column width={2} textAlign="right">
									<h3> ₹ {item.price} </h3>
									<p> +{item.tax}</p>
								</Grid.Column>
								<Grid.Column width={6} textAlign="right">
									<Icon name="cancel" />
									Remove
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Grid.Row>
				))}

				<Grid.Row textAlign="right">
					<Grid.Column width={12}>
						<h3 style={{ color: "#B1B1B1" }}>Total</h3>
					</Grid.Column>
					<Grid.Column width={4}>
						<h3>{total(data)}</h3>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
}

var total = (data) => {
	var total = 0;
	data.forEach((item) => (total += item.price + item.tax));
	return total;
};

ItemInfo.defaultProps = {
	data: [
		{
			key: "1",
			img: "/test-images/cheese-one.jpg",
			heading: "Cheese Block",
			info:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque.....",
			price: 150.0,
			tax: 20.25,
		},
		{
			key: "2",
			img: "/test-images/cheese-one.jpg",
			heading: "Cheese Block",
			info:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque.....",
			price: 150.0,
			tax: 20.25,
		},
	],
};
