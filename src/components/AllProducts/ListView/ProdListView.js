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
			<div style={imageContainer}>
						<img
							src={props.image}
							alt="product image"
							style={image}
						/>
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
	
	marginRight:"2rem",
	transform: `translateX(${50}%)`,
	minWidth: "20rem",
	marginTop: "2em",
	marginBottom: "2em",
	textAlign:"center"
};

const image = {
	borderRadius: "1rem",
	height:"auto",
	maxHeight: "300px",
};

const content = {
	background: "#DFEEFF",
	borderRadius: "2rem",
	paddingRight: "3rem",
	paddingLeft: "15rem",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};
