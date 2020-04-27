import React from "react";
import { CardComp } from "./Card";
import { Grid } from "semantic-ui-react";

export const ProductGrid = () => {
	return (
		<div style={{ marginTop: "40px", marginBottom: "30px" }}>
			<Grid>
				<Grid.Row>
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<CardComp
							img="https://image.freepik.com/free-vector/sunset-scenery-with-sea-palm-silhouette_116220-28.jpg"
							name="Lorem Ipsum"
							price="123"
							top="0px"
						/>
					</Grid.Column>
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<CardComp
							img="https://image.freepik.com/free-vector/sunset-scenery-with-sea-palm-silhouette_116220-28.jpg"
							name="Lorem Ipsum"
							price="123"
							top="2em"
						/>
					</Grid.Column>
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<CardComp
							img="https://image.freepik.com/free-vector/sunset-scenery-with-sea-palm-silhouette_116220-28.jpg"
							name="Lorem Ipsum"
							price="123"
							top="0px"
						/>
					</Grid.Column>
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<CardComp
							img="https://image.freepik.com/free-vector/sunset-scenery-with-sea-palm-silhouette_116220-28.jpg"
							name="Lorem Ipsum"
							price="123"
							top="2em"
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};
