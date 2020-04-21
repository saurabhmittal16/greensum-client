import React from "react";

const Info = ({ name, price, text }) => (
	<div
		style={{
			paddingRight: "5%",
		}}
	>
		<h1>{name}</h1>
		<h2><strong>&#8377; {price}/-</strong>
		</h2>
		<br />
		<br />
		<span>{text}</span>
	</div>
);

export default function ProdListViewCard(props) {
	return (
		<div style={parentDiv}>
			<div style={flexContainer}>
				<div style={content}>
					<div style={imageContainer}>
						<img
							src={props.image}
							alt="product image"
							style={image}
						/>
					</div>
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
	marginLeft: "auto",
	marginRight: "auto",
	marginTop: "2rem",
	marginBottom: "2rem",
	maxWidth: "1000px",
};

const flexContainer = {
	display: "flex",
	flexDirection: "row",
};
const imageContainer = {
	minWidth: "12rem",
	marginTop: "2em",
	marginBottom: "2em",
	marginRight:"2rem"
};

const image = {
	marginTop: "auto",
	marginBottom: "auto",
	borderRadius: "1rem",
	maxHeight: "300px",
	transform: `translateX(${-50}%)`,
};

const content = {
	background: "#DFEEFF",
	borderRadius: "2rem",
	paddingRight: "3rem",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};
