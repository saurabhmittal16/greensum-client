import React from "react";
import { Item, Container } from "semantic-ui-react";
import ReviewItem from "./reviewItem";
const review = props => {
	let { userReviews } = props;
	return (
		<Container>
			<Item.Group divided>
				{userReviews.map(userReview => (
					<ReviewItem
						name={userReview.name}
						date={userReview.date}
						rating={userReview.rating}
						profilePic={userReview.profilePic}
						text={userReview.text}
					/>
				))}
			</Item.Group>
		</Container>
	);
};
//
review.defaultProps = {
	userReviews: [
		{
			name: "john doe",
			text:
				"Aute enim commodo cupidatat aliqua et non excepteur cillum enim. Do ullamco exercitation enim sint occaecat. Labore ullamco et sunt ipsum ipsum enim culpa qui velit sint aliquip quis magna.",
			date: {
				day: 1,
				month: "Jan",
				year: 2020,
			},
			rating: 3,
			profilePic: "../../public/avatar.png",
		},
		{
			name: "jon doe",
			text:
				"Aute enim commodo cupidatat aliqua et non excepteur cillum enim. Do ullamco exercitation enim sint occaecat. Labore ullamco et sunt ipsum ipsum enim culpa qui velit sint aliquip quis magna.",
			date: {
				day: 1,
				month: "Jan",
				year: 2020,
			},
			rating: 4.5,
			profilePic: null,
		},
	],
};

export default review;
