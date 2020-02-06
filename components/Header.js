import React from "react";
import Link from "next/link";
import { Menu, Icon } from "semantic-ui-react";

const CustomIcon = ({ name }) => (
	<Icon name={name} style={{ fontSize: "10px", marginBottom: "3px" }} />
);

const MenuItemLink = ({ path, name }) => (
	<Menu.Item>
		<Link href={path}>
			<a
				style={{
					color: "black",
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
	return (
		<React.Fragment>
			<Menu
				secondary
				style={{
					margin: "30px",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<MenuItemLink name="Home" path="/" />
				<MenuItemLink name="About" path="/about" />
				<MenuItemLink name="Contact" path="/contact" />
				<MenuItemLink name="Support" path="/support" />

				<img src="/logo.png" style={{ margin: "auto" }} />

				<Menu.Item>
					<CustomIcon name="call" />
					+91-9876 54321
				</Menu.Item>
				<MenuItemLinkIcon name="Search" path="/search" icon="search" />
				<MenuItemLinkIcon name="Account" path="/account" icon="user" />
				<MenuItemLinkIcon name="Cart" path="/cart" icon="cart" />
			</Menu>
		</React.Fragment>
	);
}
