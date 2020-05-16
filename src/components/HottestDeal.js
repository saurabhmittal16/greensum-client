import React from "react";

export default () => (
	<div className="hottest">
		<div className="hottest__content">
			<span className="subtitle">Shop > Yogurt</span>
			<h1 className="title">
				This Month's <br /> Hottest Deal
			</h1>
			<button className="btn">Grab it</button>
		</div>
		<img src="/images/hottest.png" style={{ width: "50%" }} />
	</div>
);
