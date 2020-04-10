import React from "react";
import { Grid, GridColumn, Container, Image } from "semantic-ui-react";

const Info = ({ name, price, text }) => (
	<div>
		<strong>{name}</strong>
		<br />
		<strong>&#8377; {price}</strong>
		<br/>
		<br/>
		<p>{text}</p>
	</div>
);

export default function ProdListView(props) {
	return (
		<Grid centered >
			<Grid.Column width={4}>
				<Image
					size="small"
					src="/test-images/cheese-one.jpg"
					style={{
						position: "relative",
						top: "2rem",
						left: "1.56rem",
						background: "grey",
						borderRadius: "1.56rem",
						height: "75%",
						width: "auto",
						zIndex: 1,
					}}
				/>
			</Grid.Column>
			<Grid.Column width={10}>
				<Container
					style={{
						position: "relative",
						right: "10rem",
						background: "#DFEEFF",
						height: "100%",
						width: "100%",
						borderRadius: "1.5rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						paddingLeft:"9.375rem",
						paddingRight:"9.375rem"
					}}
				>
					<Info
						name="Lorem Ipsum"
						price="123"
						text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque libero eget pulvinar vestibulum. "
						style={{
							position: "relative",
							top: "3.125rem",
						}}
					></Info>
				</Container>
			</Grid.Column>
		</Grid>
	);
}