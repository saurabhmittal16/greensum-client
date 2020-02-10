import React from "react";
import { Item, Container, Rating, Divider } from "semantic-ui-react";
import AddReview from "./AddReview";

const ReviewItem = props => {
	let { name, date, text, profilePic, rating } = props;
	return (
		// for the time being I'm using a sample image
		<Item>
			<Item.Image
				src="../../test-images/avatar.png"
				size="tiny"
				style={{ float: "left" }}
			/>

			<Item.Content>
				<Item.Header>{name}</Item.Header>
				<Item.Meta>
					<span className="date" style={{ fontWeight: 200 }}>
						{date.day} {date.month}. {date.year}
					</span>
					<span className="ratings" style={{ float: "right" }}>
						<Rating
							defaultRating={rating}
							maxRating={5}
							disabled
							style={{ color: "green" }}
						/>
					</span>
				</Item.Meta>
				<Item.Description>{text}</Item.Description>
			</Item.Content>
		</Item>
	);
};

const Review = props => {
	let { userReviews } = props;
	return (
		<Container
			style={{
				marginTop: "64px",
				padding: "48px 64px",
				boxShadow:
					"0px -1px 1px 0px rgba(0, 0, 0, -2.8), 0px 0px 4px 1px rgba(0, 0, 0, 0.2)",
			}}
		>
			<Item.Group divided>
				{userReviews.map((userReview, index) => (
					<ReviewItem
						key={index}
						name={userReview.name}
						date={userReview.date}
						rating={userReview.rating}
						profilePic={userReview.profilePic}
						text={userReview.text}
					/>
				))}
			</Item.Group>
			<Divider />
			<AddReview />
		</Container>
	);
};

//
Review.defaultProps = {
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

export default Review;
