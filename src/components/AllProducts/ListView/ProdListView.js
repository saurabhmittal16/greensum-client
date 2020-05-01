import React from "react";

const Info = ({ name, price, text }) => (
	<div className="info">
		<h1>{name}</h1>
		<h2>
			<strong>&#8377; {price}/-</strong>
		</h2>
		<br />
		<br />
		<span>{text}</span>
	</div>
);

export default function ProdListViewCard(props) {
	return (
		<div className="parentDiv">
			<div className="flexContainer">
				<div className="imageContainer">
					<img src={props.image} alt="product image" />
				</div>
				<div className="content">
					<Info
						name={props.name}
						price={props.price}
						text={props.text}
					></Info>
				</div>
			</div>
		</div>
	);
}
