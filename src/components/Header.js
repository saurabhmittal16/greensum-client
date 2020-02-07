import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Icon } from "semantic-ui-react";

const CustomIcon = ({ name }) => (
	<Icon name={name} style={{ fontSize: "10px", marginBottom: "3px" }} />
);

const MenuItemLink = ({ path, name, current }) => (
	<Menu.Item>
		<Link href={path}>
			<a
				style={{
					color: "black",
					borderBottom: current === path ? "solid 1px black" : "none",
				}}
			>
				{name}
			</a>
		</Link>
	</Menu.Item>
);

const MenuItemLinkIcon = ({ path, name, icon }) => (
	<Menu.Item>
		<Link href={path}>
			<a
				style={{
					color: "black",
				}}
			>
				<CustomIcon name={icon} />
				{name}
			</a>
		</Link>
	</Menu.Item>
);

export default function Header() {
	const router = useRouter();
	console.log(router.pathname.slice(1));
	return (
		<React.Fragment>
			<Menu
				secondary
				style={{
					margin: "60px 120px",
					display: "flex",
					justifyContent: "center",
					height: "60px",
				}}
			>
				<MenuItemLink name="Home" path="/" current={router.pathname} />
				<MenuItemLink
					name="About"
					path="/about"
					current={router.pathname}
				/>
				<MenuItemLink
					name="Contact"
					path="/contact"
					current={router.pathname}
				/>
				<MenuItemLink
					name="Support"
					path="/support"
					current={router.pathname}
				/>

				<img
					src="/logo.png"
					style={{ margin: "auto", height: "100%" }}
				/>

				<Menu.Item>
					<CustomIcon name="call" />
					+91-9876 54321
				</Menu.Item>
				<MenuItemLinkIcon name="Search" path="/search" icon="search" />
				<MenuItemLinkIcon name="Account" path="/account" icon="user" />
				<MenuItemLinkIcon name="Cart" path="/cart" icon="cart" />
			</Menu>
			<div
				style={{
					backgroundColor: "#276b2e",
					marginTop: "20px",
					fontSize: "32px",
					fontWeight: "bold",
					color: "white",
				}}
			>
				<div
					className="container"
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "64px 0",
					}}
				>
					<span>Our Store</span>
					<span>home/ shop</span>
				</div>
			</div>
		</React.Fragment>
	);
}
