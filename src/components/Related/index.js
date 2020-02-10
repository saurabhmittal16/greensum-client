import React from "react";
import Card from "./RelatedCard";
import { Header } from "semantic-ui-react";

export default function Related() {
	return (
		<div
			style={{
				// width: "calc((100vw-400))",
				maxHeight: "400px",
				overflowX: "scroll",
				overflowY: "hidden",
				whiteSpace: "nowrap",
				marginTop: "64px",
			}}
			className="relatedDiv"
		>
			<Header as="h1">Related Products</Header>
			<div
				style={{
					display: "inline-block",
					verticalAlign: "middle",
					padding: "20px",
				}}
			>
				<Card
					name="Lorem Ipsum"
					price="123"
					image="https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612"
					link="#"
					style={{ minWidth: "200px", maxWidth: "300px" }}
				/>
			</div>
			<div
				style={{
					display: "inline-block",
					verticalAlign: "middle",
					padding: "20px",
				}}
			>
				<Card
					name="Lorem Ipsum"
					price="123"
					image="https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612"
					link="#"
					style={{ minWidth: "200px", maxWidth: "300px" }}
				/>
			</div>
			<div
				style={{
					display: "inline-block",
					verticalAlign: "middle",
					padding: "20px",
				}}
			>
				<Card
					name="Lorem Ipsum"
					price="123"
					image="https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612"
					link="#"
					style={{ minWidth: "200px", maxWidth: "300px" }}
				/>
			</div>
			<div
				style={{
					display: "inline-block",
					verticalAlign: "middle",
					padding: "20px",
				}}
			>
				<Card
					name="Lorem Ipsum"
					price="123"
					image="https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612"
					link="#"
					style={{ minWidth: "200px", maxWidth: "300px" }}
				/>
			</div>
		</div>
	);
}
