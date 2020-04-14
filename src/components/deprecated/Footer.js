import React from "react";
import Link from "next/link";
import { Menu, Icon } from "semantic-ui-react";
import { Grid, Image, Segment } from "semantic-ui-react";

const FooterLink = ({ path, name }) => (
	<Menu.Item
		style={{
			marginBottom: "0.1rem",
		}}
	>
		<Link href={path}>
			<a
				style={{
					color: "#FFFF",
				}}
			>
				{name}
			</a>
		</Link>
	</Menu.Item>
);

const CustomIcon = ({ name, path }) => (
	<Link href={path}>
		<a style={{ color: "#FFFFFF", margin: "0 auto" }}>
			<Icon
				circular
				name={name}
				style={{ border: "0.108rem solid", color: "white" }}
			/>
		</a>
	</Link>
);

const ImageIcon = ({ path }) => (
	<Image
		src={path}
		size="mini"
		style={{ display: "inline", marginRight: "2rem" }}
	/>
);

const Footer = () => {
	return (
		<Grid
			container
			stackable
			columns={3}
			style={{
				width:"100%",
				paddingLeft:"2rem",
				paddingRight:"2rem",
				marginTop: "5rem",
				backgroundColor: "#046B2D",
				borderRadius: "40px 40px 0px 0px ",
				color: "#FFFF",
				justifyContent: "center",
				marginBottom:"0px"
			}}
		>
			<Grid.Column style={{ height: "100%" }}>
				<Segment
					basic
					style={{
						fontSize: "1.2rem",
						paddingLeft: "5rem",
						backgroundColor: "",
					}}
				>
					<span style={{ fontWeight: "bold" }}> Address </span>
					<span style={{ display: "block" }}>
						123, New Colony, Delhi
					</span>
					<br />
					<span style={{ fontWeight: "bold" }}>Contact</span>
					<span style={{ display: "block" }}>
						Email : greensum@gmail.com
					</span>
					<span style={{ display: "block" }}>
						Cell : +91 - 987654321
					</span>
					<span style={{ display: "block" }}>Fax : greensum.io</span>
				</Segment>
			</Grid.Column>
			<Grid.Column>
				<Segment basic style={{ margin: "auto" }}>
					<img
						src="/footer/Footer logo.png"
						alt="footer logo "
						style={{
							display: "block",
							height:"auto",
							width: "55%",
							marginLeft: "auto",
							marginRight: "auto",
						}}
					/>
					
				</Segment>
			</Grid.Column>
			<Grid.Column>
				<Segment
					basic
					style={{
						marginTop: "0%",
						paddingLeft: "5rem",
						fontSize: "1.2rem",
					}}
				>
					<p style={{ fontWeight: "bold" }}>Useful links</p>
					<FooterLink name="Privacy Policy" path="/" />
					<FooterLink name="Terms and Conditions" path="/" />
					<FooterLink name="Orders and Tracking" path="/" />
					<FooterLink name="Return Policy" path="/" />
					<FooterLink name="Customer Care" path="/" />

					
				</Segment>
				
				<Segment basic style={{ display: "flex", margin:"auto", width:"75%" }}>
						<CustomIcon name="facebook f" path="/" />
						<CustomIcon name="instagram" path="/" />
						<CustomIcon name="twitter" path="/" />
						<CustomIcon name="google plus g" path="/" />
					</Segment>
			</Grid.Column>
		</Grid>
	);
};
export default Footer;
