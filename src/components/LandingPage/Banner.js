import React from "react";
import { Segment, Grid, Button } from "semantic-ui-react";

export default function Banner() {
	return (
		<Segment
			basic
			style={{
				width: "100%",
				marginTop: "5em",
				marginBottom: "10em",
			}}
		>
			<Grid stackable>
				<Grid.Row columns={2} style={{ height: "100%" }}>
					<Grid.Column>
						<img src="./landing-page/ecoFriendly.png" />
					</Grid.Column>
					<Grid.Column style={{ paddingLeft: "14em" }}>
						<div className="banner">
							<h1 className="banner__heading">
								Be <br /> Wholesome.
							</h1>
							<p className="banner__banner-info">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt....
							</p>
							<Button
								style={{
									boxShadow:
										" 5px 5px 25px rgba(4, 107, 45, 0.2)",
									background: "#046B2D",
									color: "white",
									padding: "1em 4em",
								}}
							>
								Button
							</Button>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
}
