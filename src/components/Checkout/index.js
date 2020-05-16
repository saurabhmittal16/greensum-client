import React from "react";
import ItemInfo from "./ItemInfo";
import CheckoutForm from "./CheckoutForm";
import { Segment, Icon } from "semantic-ui-react";
import Promo from "./Promo";

export default function index() {
	return (
		<div>
			<Segment basic>
				<div style={{ float: "right" }}>
					<Icon name="shield" />
					All Payments are secure
				</div>
				<ItemInfo />
				<Promo />
			</Segment>
			<CheckoutForm />
		</div>
	);
}
