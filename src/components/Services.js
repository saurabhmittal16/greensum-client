import React from "react";

const data = [
	{
		title: "Lorem Ipsum Dolor Sit Amet",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		color: "#FFFBC8",
		icon: "truck",
	},
	{
		title: "Lorem Ipsum Dolor Sit Amet",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		color: "#EDFCF9",
		icon: "clock outline",
	},
	{
		title: "Lorem Ipsum Dolor Sit Amet",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		color: "#DFF9D9",
		icon: "file text",
	},
];

export default () => (
	<div className="services">
		<div className="services__heading">Our Services</div>
		<div className="services__cards">
			{data.map((item, index) => (
				<div className="wrapper" key={`service_${index}`}>
					<div className="logo">
						<i
							aria-hidden="true"
							className={`${item.icon} icon`}
						></i>
					</div>
					<div style={{ background: item.color }} className="item">
						<span className="title">{item.title}</span>
						<br />
						<span className="text">{item.text}</span>
					</div>
				</div>
			))}
		</div>
	</div>
);
