import React from "react";
import Link from "next/link";
import { Menu, Icon } from "semantic-ui-react";
import { Grid, Image, Segment, Container } from "semantic-ui-react";

const FooterLink = ({ path, name }) => (
	<Menu.Item
		style={{
			marginBottom: "0.1rem",
		}}
	>
		<Link href={path}>
			<a
				style={{
					color: "#FFFFFF",
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
		<Segment
			inverted
			vertical
			style={{
				padding: "5em 0em",
				paddingBottom: "0",
				backgroundColor: "#046B2D",
				borderRadius: "40px 40px 0px 0px ",
				marginTop: 40,
			}}
		>
			<Container>
				<Grid divided inverted stackable columns={3}>
					<Grid.Row>
						<Grid.Column>
							<Segment
								basic
								style={{
									fontSize: "1.2rem",
									color: "#FFFFFF",
								}}
							>
								<span
									style={{
										fontWeight: "bold",
									}}
								>
									{" "}
									Address{" "}
								</span>
								<span
									style={{
										display: "block",
									}}
								>
									123, New Colony, Delhi
								</span>
								<br />
								<span
									style={{
										fontWeight: "bold",
									}}
								>
									Contact
								</span>
								<span
									style={{
										display: "block",
									}}
								>
									Email : greensum@gmail.com
								</span>
								<span
									style={{
										display: "block",
									}}
								>
									Cell : +91 - 987654321
								</span>
								<span
									style={{
										display: "block",
									}}
								>
									Fax : greensum.io
								</span>
							</Segment>
						</Grid.Column>
						<Grid.Column>
							<Segment basic style={{ margin: "auto" }}>
								<img
									src="/footer/Footer logo.png"
									alt="footer logo "
									style={{
										display: "block",
										height: "auto",
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
								<p
									style={{
										fontWeight: "bold",
										color: "#FFFFFF",
									}}
								>
									Useful links
								</p>
								<FooterLink name="Privacy Policy" path="/" />
								<FooterLink
									name="Terms and Conditions"
									path="/"
								/>
								<FooterLink
									name="Orders and Tracking"
									path="/"
								/>
								<FooterLink name="Return Policy" path="/" />
								<FooterLink name="Customer Care" path="/" />
							</Segment>

							<Segment
								basic
								style={{
									display: "flex",
									margin: "auto",
									width: "75%",
								}}
							>
								<CustomIcon name="facebook f" path="/" />
								<CustomIcon name="instagram" path="/" />
								<CustomIcon name="twitter" path="/" />
								<CustomIcon name="google plus g" path="/" />
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	);
};
export default Footer;
