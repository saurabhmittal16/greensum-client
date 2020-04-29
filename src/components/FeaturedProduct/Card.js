import React from "react";

export const CardServices = ({ header, description, color, icon }) => {
	return (
		<div
			className="ui link card FeaturedServices_Card"
			style={{ background: `${color}` }}
		>
			<div
				className="ServiceIcon"
				style={{ borderRadius: "50% !important" }}
			>
				<i aria-hidden="true" className={`${icon} icon`}></i>
			</div>
			<div className="content">
				<div className="header">{header}</div>
				<div className="description">{description}</div>
			</div>
		</div>
	);
};
