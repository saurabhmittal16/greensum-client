import React from "react";

const ViewCard = ({ src, type, name, price, to }) => (
	<div
		className="recently-viewed_wrapper"
		style={{
			width: type === "wide" ? "60%" : "40%",
		}}
	>
		<div
			className="recently-viewed_card"
			style={{
				backgroundImage: `url(${src})`,
			}}
			href={to}
		>
			<div className="recently-viewed_cardContent">
				<div>
					{name}
					<br />
					<b>{price}</b>
				</div>
			</div>
		</div>
	</div>
);

export default ViewCard;
