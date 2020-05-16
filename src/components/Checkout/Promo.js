import React from "react";
import { Input } from "semantic-ui-react";

export default function Promo() {
	return (
		<div className="promo_parent stackable">
			<span className="promo__text">Apply promo code</span>
			<Input style={{ borderRadius: "16px" }} />
		</div>
	);
}
