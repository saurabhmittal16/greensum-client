import React from "react";
import { Item, Container,Rating } from "semantic-ui-react";
const ReviewItem = props => {
	let { name, date, text, profilePic, rating } = props;
	return (
		// for the time being I'm using a sample image 
			<Item>
				<Item.Image
					src="../../test-images/avatar.png"
                    size="tiny"
					style={{float:'left'}}
				/>

				<Item.Content>
					<Item.Header >{name}</Item.Header>
					<Item.Meta>
						<span className="date" style={{fontWeight: 200}}>{date.day} {date.month}. {date.year}</span>
						 <span className="ratings" style={{float:'right'}}>
							<Rating
								defaultRating={rating}
								maxRating={5}
								disabled
								style={{color:'green'}}
							/>
						</span> 
					</Item.Meta>
					<Item.Description>{text}</Item.Description>
				</Item.Content>
			</Item>

		
	);
};

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
