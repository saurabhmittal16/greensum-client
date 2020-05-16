import React from "react";

const data = [
	{
		text:
			"Ex ad proident culpa ut enim in dolor laboris consequat consectetur id excepteur non.",
		name: "John Doe",
	},
	{
		text:
			"Ex ad proident culpa ut enim in dolor laboris consequat consectetur id excepteur non.Ex ad proident culpa ut enim in dolor laboris consequat consectetur id excepteur non.",
		name: "John Doe",
	},
	{
		text:
			"Ex ad proident culpa ut enim in dolor laboris consequat consectetur id excepteur non.",
		name: "John Doe",
	},
];

export default () => (
	<div className="chooseus">
		<div className="chooseus__heading">Why Choose Us</div>
		<div className="chooseus__cards">
			{data.map((item, index) => (
				<div key={`choose_${index}`} className="parent">
					<div className="quote">“</div>
					<div className="text">
						<span className="message">{item.text}</span>
						<span className="name">- {item.name}</span>
					</div>
				</div>
			))}
		</div>
	</div>
);
