import React from "react";

const Info = ({ name, price, text }) => (
	<div>
		<h2>{name}</h2>
		<strong>&#8377; {price}/-</strong>
		<br />
		<br />
		<span>{text}</span>
	</div>
);

export default function ProdListViewCard(props) {
	return (
		<div style={parentDiv}>
			<div style={flexContainer}>
				<div style={imageDiv}>
					<img src={props.image} alt="product image" style={image} />
				</div>
				<div style={content}>
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

const parentDiv = {
	marginTop: "2rem",
	marginBottom: "2rem",
};

const flexContainer = {
	display: "flex",
	flexDirection: "row",
};

const imageDiv = {
	float: "left",
	zIndex: "1",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	transform: `translateX(${25}%)`,
};

const image = {
	marginTop: "auto",
	marginBottom: "auto",
	borderRadius: "1rem",
	maxHeight: "70%",
	width: "auto",
};

const content = {
	background: "#DFEEFF",
	borderRadius: "2rem",
	paddingLeft: "12%",
	paddingRight: "10%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};
