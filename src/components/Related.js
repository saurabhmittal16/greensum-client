import React from "react";
import Card from "./RelatedCard";

export default function Related() {
	return (
		<div
			style={{
				margin: "60px 120px",
				maxHeight: "400px",
				overflowX: "scroll",
				overflowY: "hidden",
				whiteSpace: "nowrap",
			}}
			className="relatedDiv"
		>
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
