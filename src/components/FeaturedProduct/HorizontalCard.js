import React from "react";
import { Item, Button } from "semantic-ui-react";

const items = [
	{
		childKey: 0,
		image: "/images/wireframe/image.png",
		header: "Header",
		description: "Description",
		meta: "Metadata",
		extra: "Extra",
	},
];

// const sizeScreen = () => {
// 	if (window.innerWidth <= 450) {
// 		return { width: "0rem" };
// 	} else if (window.innerWidth <= 768) {
// 		return { width: "1rem" };
// 	} else if (window.innerWidth <= 992) {
// 		return { width: "2rem" };
// 	} else if (window.innerWidth <= 1280) {
// 		return { width: "3.5rem" };
// 	} else {
// 		return { width: "4rem" };
// 	}
// };

export const HorizontalCard = () => {
	return (
		<Item.Group className="FeatureHorizontal_Group">
			<Item className="FeatureHorizontalCard_Item">
				<Item.Content className="FeatureHorizontalCard_Content">
					<Item.Meta>
						<span className="price">Card > Yogurt</span>
					</Item.Meta>
					<Item.Header>This Month's Deal is Hottest Deal</Item.Header>

					<Item.Description>
						<Button
							color="blue"
							size="large"
							style={{
								paddingLeft: "45px",
								paddingRight: "45px",
							}}
						>
							Grab it
						</Button>
					</Item.Description>
				</Item.Content>
				<Item.Image
					size="large"
					src="https://images.pexels.com/photos/433539/pexels-photo-433539.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					style={{ maxWidth: "50%" }}
				/>
			</Item>
		</Item.Group>
	);
};
