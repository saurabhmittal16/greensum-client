import React from "react";
import { Segment, Grid, Search } from "semantic-ui-react";

export default function Banner() {
	return (
		<Segment
			style={{
				background: "#489064",
				borderRadius: "40px",
				color: "white",
				padding: "0",
				width: "80%",
				margin: "2em auto",
				boxShadow: "0px 20px 45px rgba(72, 144, 100, 0.35)",
			}}
		>
			<Grid>
				<Grid.Row>
					<Grid.Column
						width={12}
						style={{
							padding: "2em",
							paddingLeft: "5em",
						}}
					>
						<h1
							style={{
								fontSize: "3em",
							}}
						>
							The Best Products
							<br />
						</h1>
						<div
							style={{
								fontSize: "3em",
								marginBottom: "1em",
							}}
						>
							in Every Category
						</div>

						<Search fluid icon="none" placeholder="Search Here" />
					</Grid.Column>
					<Grid.Column
						width={4}
						style={{
							padding: 0,
						}}
					>
						<img
							src="./landing-page/yogurt.png"
							style={{
								maxHeight: "300px",
								float: "right",
								margin: "0px",
								padding: "0px",
							}}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
}
