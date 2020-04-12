import React, { Component } from "react";

const Info = ({ name, price, text }) => (
	<div>
		<strong>{name}</strong>
		<br />
		<strong>&#8377; {price}/-</strong>
		<br />
		<br />
		<span>{text}</span>
	</div>
);

export default function ProdListViewCard(props) {
	return (
		<div>
			<div style={flexContainer}>
				<div style={imageDiv}>
					<img src={props.image} alt="product image" style={image} />
				</div>
				<div style={content}>
					<Info
						name={props.name}
						price={props.price}
						text={props.text}
						style={{
							position: "relative",
							top: "3.125rem",
						}}
					></Info>
				</div>
			</div>
		</div>
	);
}

const flexContainer = {
	display: "flex",
	flexDirection: "row",
	minHeight: "160px",
};

const imageDiv = {
	marginRight: "-5%",
	zIndex: "1",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

const image = {
	marginTop: "auto",
	marginBottom: "auto",
	borderRadius: "1rem",
	maxHeight: "150px",
	width: "auto",
	border: "solid 0.1px",
};

const content = {
	flexGrow: "3",
	background: "#DFEEFF",
	borderRadius: "1.5rem",
	paddingLeft: "10%",
	paddingTop: "0.9rem",
	paddingBottom: "0.9rem",
	paddingRight: "5%",
};
