import React from "react";

const Info = ({ name, price, text }) => (
	<div 
		style={{
			paddingRight:"15%"
		}}
	>
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
				<div style={content}>
				<div
				style={imageContainer}
				>
					<img src={props.image} alt="product image" style={image} />
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
	marginTop: "2rem",
	marginBottom: "2rem",
	minWidth:"70vw"
};

const flexContainer = {
	display: "flex",
	flexDirection: "row",
};
const imageContainer = {
	minWidth:"15.625rem",
	border:"green"
	
};

const image = {
	marginTop: "auto",
	marginBottom: "auto",
	borderRadius: "1rem",
	maxHeight:"220px",
	width: "auto",
	maxWidth:"100%",
	height:"auto",
	transform: `translateX(${-50}%)`,
};

const content = {
	background: "#DFEEFF",
	borderRadius: "2rem",
	paddingRight: "3rem",
	display: "flex",
	paddingTop:"1rem",
	paddingBottom:"1rem",
	justifyContent: "center",
	alignItems: "center",
};
