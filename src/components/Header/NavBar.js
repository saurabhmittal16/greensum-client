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

export default function Header({ heading, subHeading }) {
	const router = useRouter();
	// console.log(router.pathname.slice(1));

	return (
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
				name="Shop"
				path="/shop"
				current={router.pathname}
			/>
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
				name="Recipes"
				path="/recipes"
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
	);
}
