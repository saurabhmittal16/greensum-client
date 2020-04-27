import React from "react";
import { Grid, Card, Icon } from "semantic-ui-react";

export const CardComp = ({ img, name, price, top }) => {
	return (
		<Grid>
			<Grid.Row className="featuredCard_Row">
				<Grid.Column
					width={1}
					className="ui center aligned segment  featuredCard_Column"
					style={{
						padding: "0px",
						paddingTop: `${top}`,
					}}
				>
					<Icon name="heart outline" />
				</Grid.Column>
				<Grid.Column width={15} style={{ padding: "0px" }}>
					<Card
						className="featuredCard_Card"
						style={{
							paddingTop: `${top}`,
						}}
						image={img}
						header={name}
						description={`Rs. ${price}`}
					/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export const CardServices = ({ header, description, color }) => {
	return (
		<Card
			className="FeaturedServices_Card"
			style={{ background: `${color}` }}
			link
			header={header}
			description={description}
		/>
	);
};
